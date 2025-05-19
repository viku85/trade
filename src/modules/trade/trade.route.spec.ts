import express from 'express';
import request from 'supertest';
import { TradeRoute } from './trade.route'; // Assuming TradeRoute exports the router configuration
import { TradeController } from './trade.controller'; // Assuming you have a TradeController
import { tradeValidation } from './trade.validation'; // Assuming you have validation middleware

// Mock the TradeController and validation middleware
jest.mock('./trade.controller');
jest.mock('./trade.validation');

const mockTradeController = TradeController as jest.Mocked<typeof TradeController>;
const mockTradeValidation = tradeValidation as jest.Mocked<typeof tradeValidation>;

// Create a simple Express app to test the router
const app = express();
app.use(express.json()); // To parse JSON body in requests
app.use('/trade', TradeRoute); // Mount the trade router

describe('Trade Routes', () => {
  let mockControllerInstance: jest.Mocked<TradeController>;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Create a mock instance of the controller
    mockControllerInstance = {
      createTrade: jest.fn(),
      getTradeHistory: jest.fn(),
      getTradeById: jest.fn()

    } as jest.Mocked<TradeController>;

    // Mock the constructor to return our mock instance
    (mockTradeController as jest.Mock).mockImplementation(() => mockControllerInstance);

    // Mock the validation middleware to just call next()
    mockTradeValidation.placeTrade = jest.fn((req, res, next) => next());
    // Mock other validation methods if they exist
  });

  it('should define the POST /trade route and link it to TradeController.createTrade', async () => {
    await request(app).post('/trade').send({}); // Send a basic request to hit the route

    // Verify that the placeTrade method of the mocked controller was called
    expect(mockControllerInstance.createTrade).toHaveBeenCalled();

  });

  it('should apply the placeTrade validation middleware to the POST /trade route', async () => {
    await request(app).post('/trade').send({});

    // Verify that the placeTrade validation middleware was called
    expect(mockTradeValidation.placeTrade).toHaveBeenCalled();
  });

  it('should define the GET /trade/history route and link it to TradeController.getTradeHistory', async () => {
    await request(app).get('/trade/history'); // Send a basic GET request

    // Verify that the getTradeHistory method of the mocked controller was called
    expect(mockControllerInstance.getTradeHistory).toHaveBeenCalled();
  });

  it('should define the GET /trade/:id route and link it to TradeController.getTradeById', async () => {
    await request(app).get('/trade/123');
    expect(mockControllerInstance.getTradeById).toHaveBeenCalled();
  });

});