import { Request, Response } from 'express';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';
import { CreateTradeDto } from './trade.types';
import { validate } from 'class-validator'; // Assuming you use class-validator for validation

// Mock the TradeService
jest.mock('./trade.service');

describe('TradeController', () => {
  let tradeController: TradeController;
  let tradeService: jest.Mocked<TradeService>;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Create a new instance of the mocked TradeService
    tradeService = new TradeService() as jest.Mocked<TradeService>;

    // Create an instance of the TradeController with the mocked service
    tradeController = new TradeController(tradeService);

    // Initialize mock request and response objects
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(), // Chainable status method
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('createTrade', () => {
    it('should call tradeService.createTrade and return 201 status on success', async () => {
      const tradeDetails: CreateTradeDto = {
        symbol: 'AAPL',
        type: 'BUY',
        quantity: 10,
        price: 150,
        orderType: 'MARKET',
      };
      const createdTrade = { id: '123', ...tradeDetails };

      // Mock the service method to resolve with the created trade
      tradeService.createTrade.mockResolvedValue(createdTrade);

      // Set the request body
      mockRequest.body = tradeDetails;

      // Call the controller method
      await tradeController.createTrade(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(tradeService.createTrade).toHaveBeenCalledWith(tradeDetails);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(createdTrade);
    });

    it('should return 400 status if validation fails', async () => {
      // Invalid trade details (missing required field)
      const tradeDetails: Partial<CreateTradeDto> = {
        symbol: 'AAPL',
        type: 'BUY',
        quantity: 10,
        // price: 150, // Missing price
        orderType: 'MARKET',
      };

      // Set the request body
      mockRequest.body = tradeDetails;

      // Mock validate to return errors
      const mockValidationErrors = [{ property: 'price', constraints: { isNotEmpty: 'price should not be empty' } }];
      (validate as jest.Mock).mockResolvedValue(mockValidationErrors); // Mock the validate function directly

      // Call the controller method
      await tradeController.createTrade(mockRequest as Request, mockResponse as Response);

      // Assertions
      // No assertion on tradeService.createTrade as it should not be called
      expect(tradeService.createTrade).not.toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(mockValidationErrors);
    });


    it('should return 500 status if tradeService.createTrade throws an error', async () => {
      const tradeDetails: CreateTradeDto = {
        symbol: 'AAPL',
        type: 'BUY',
        quantity: 10,
        price: 150,
        orderType: 'MARKET',
      };
      const errorMessage = 'Failed to create trade';

      // Mock the service method to reject with an error
      tradeService.createTrade.mockRejectedValue(new Error(errorMessage));

      // Set the request body
      mockRequest.body = tradeDetails;

      // Mock validate to return no errors
      (validate as jest.Mock).mockResolvedValue([]);

      // Call the controller method
      await tradeController.createTrade(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(tradeService.createTrade).toHaveBeenCalledWith(tradeDetails);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  // Add tests for other controller methods (e.g., getTradeById, getTradeHistory) here
  describe('getTradeById', () => {
    it('should call tradeService.getTradeById and return 200 status on success', async () => {
      const tradeId = '123';
      const tradeDetails = {
        id: tradeId,
        symbol: 'AAPL',
        type: 'BUY',
        quantity: 10,
        price: 150,
        orderType: 'MARKET',
      };

      // Mock the service method to resolve with the trade details
      tradeService.getTradeById.mockResolvedValue(tradeDetails);

      // Set the request parameters
      mockRequest.params = { id: tradeId };

      // Call the controller method
      await tradeController.getTradeById(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(tradeService.getTradeById).toHaveBeenCalledWith(tradeId);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(tradeDetails);
    });

    it('should return 404 status if tradeService.getTradeById returns null', async () => {
      const tradeId = 'non-existent-id';

      // Mock the service method to resolve with null (trade not found)
      tradeService.getTradeById.mockResolvedValue(null);

      // Set the request parameters
      mockRequest.params = { id: tradeId };

      // Call the controller method
      await tradeController.getTradeById(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(tradeService.getTradeById).toHaveBeenCalledWith(tradeId);
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.send).toHaveBeenCalledWith('Trade not found');
    });

    it('should return 500 status if tradeService.getTradeById throws an error', async () => {
      const tradeId = '123';
      const errorMessage = 'Failed to retrieve trade';

      // Mock the service method to reject with an error
      tradeService.getTradeById.mockRejectedValue(new Error(errorMessage));

      // Set the request parameters
      mockRequest.params = { id: tradeId };

      // Call the controller method
      await tradeController.getTradeById(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(tradeService.getTradeById).toHaveBeenCalledWith(tradeId);
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('getTradeHistory', () => {
    it('should call tradeService.getTradeHistory and return 200 status with trade history', async () => {
      const tradeHistory = [
        { id: '1', symbol: 'AAPL', type: 'BUY', quantity: 10, price: 150, orderType: 'MARKET' },
        { id: '2', symbol: 'GOOG', type: 'SELL', quantity: 5, price: 2500, orderType: 'LIMIT' },
      ];

      // Mock the service method to resolve with trade history
      tradeService.getTradeHistory.mockResolvedValue(tradeHistory);

      // Call the controller method
      await tradeController.getTradeHistory(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(tradeService.getTradeHistory).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(tradeHistory);
    });

    it('should return 500 status if tradeService.getTradeHistory throws an error', async () => {
      const errorMessage = 'Failed to retrieve trade history';

      // Mock the service method to reject with an error
      tradeService.getTradeHistory.mockRejectedValue(new Error(errorMessage));

      // Call the controller method
      await tradeController.getTradeHistory(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(tradeService.getTradeHistory).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});