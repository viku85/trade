import {TradeRepository} from './trade.repository'; // Assuming TradeRepository is in this file
import {PrismaClient} from '@prisma/client';

// Mock PrismaClient for testing
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn(() => ({
    purchase: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
    sale: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    rulePurchase: {
      create: jest.fn(),
    },
  })),
}));

describe('TradeRepository', () => {
  let tradeRepository: TradeRepository;
  let mockPrismaClient: jest.Mocked<PrismaClient>;

  beforeEach(() => {
    mockPrismaClient = new PrismaClient() as jest.Mocked<PrismaClient>;
    tradeRepository = new TradeRepository(mockPrismaClient); // Pass mock client to repository
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createPurchase', () => {
    it('should create a purchase successfully', async () => {
      const createPurchaseParams = {amount: 10, asset: 'AAPL', userId: 1};
      const mockPurchase = {
        id: 1,
        ...createPurchaseParams,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaClient.purchase.create.mockResolvedValue(mockPurchase);

      const purchase = await tradeRepository.createPurchase(createPurchaseParams);

      expect(mockPrismaClient.purchase.create).toHaveBeenCalledWith({data: createPurchaseParams});
      expect(purchase).toEqual(mockPurchase);
    });
  });

  describe('createSale', () => {
    it('should create a sale successfully', async () => {
      const createSaleParams = {amount: 5, asset: 'TSLA', userId: 1};
      const mockSale = {id: 1, ...createSaleParams, createdAt: new Date(), updatedAt: new Date()};
      mockPrismaClient.sale.create.mockResolvedValue(mockSale);

      const sale = await tradeRepository.createSale(createSaleParams);

      expect(mockPrismaClient.sale.create).toHaveBeenCalledWith({data: createSaleParams});
      expect(sale).toEqual(mockSale);
    });
  });

  describe('getPurchase', () => {
    it('should get a purchase by id successfully', async () => {
      const purchaseId = 1;
      const mockPurchase = {
        id: purchaseId,
        amount: 10,
        asset: 'AAPL',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaClient.purchase.findUnique.mockResolvedValue(mockPurchase);

      const purchase = await tradeRepository.getPurchase(purchaseId);

      expect(mockPrismaClient.purchase.findUnique).toHaveBeenCalledWith({where: {id: purchaseId}});
      expect(purchase).toEqual(mockPurchase);
    });

    it('should return null if purchase is not found', async () => {
      const purchaseId = 999;
      mockPrismaClient.purchase.findUnique.mockResolvedValue(null);

      const purchase = await tradeRepository.getPurchase(purchaseId);

      expect(mockPrismaClient.purchase.findUnique).toHaveBeenCalledWith({where: {id: purchaseId}});
      expect(purchase).toBeNull();
    });
  });

  describe('getPurchasesByUserId', () => {
    it('should get purchases by userId successfully', async () => {
      const userId = 1;
      const mockPurchases = [
        {id: 1, amount: 10, asset: 'AAPL', userId, createdAt: new Date(), updatedAt: new Date()},
        {id: 2, amount: 5, asset: 'MSFT', userId, createdAt: new Date(), updatedAt: new Date()},
      ];
      mockPrismaClient.purchase.findMany.mockResolvedValue(mockPurchases);

      const purchases = await tradeRepository.getPurchasesByUserId(userId);

      expect(mockPrismaClient.purchase.findMany).toHaveBeenCalledWith({where: {userId}});
      expect(purchases).toEqual(mockPurchases);
    });
  });

  describe('getSalesByUserId', () => {
    it('should get sales by userId successfully', async () => {
      const userId = 1;
      const mockSales = [
        {id: 1, amount: 5, asset: 'TSLA', userId, createdAt: new Date(), updatedAt: new Date()},
        {id: 2, amount: 3, asset: 'GOOG', userId, createdAt: new Date(), updatedAt: new Date()},
      ];
      mockPrismaClient.sale.findMany.mockResolvedValue(mockSales);

      const sales = await tradeRepository.getSalesByUserId(userId);

      expect(mockPrismaClient.sale.findMany).toHaveBeenCalledWith({where: {userId}});
      expect(sales).toEqual(mockSales);
    });
  });

  describe('createRulePurchase', () => {
    it('should create a rule purchase successfully', async () => {
      const createRulePurchaseParams = {
        userId: 1,
        ruleId: 10,
        purchase: {
          orderId: 'order-123',
          quantity: 10,
          symbol: 'AAPL',
        },
      };
      const mockRulePurchase = {
        id: 1,
        ...createRulePurchaseParams,
        createdAt: new Date(),
        updatedAt: new Date(),
        purchaseId: 1,
      };
      const mockPurchase = {
        id: 1,
        amount: 10,
        asset: 'AAPL',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaClient.rulePurchase.create.mockResolvedValue(mockRulePurchase);
      mockPrismaClient.purchase.create.mockResolvedValue(mockPurchase);

      const rulePurchase = await tradeRepository.createRulePurchase(createRulePurchaseParams);

      expect(mockPrismaClient.rulePurchase.create).toHaveBeenCalledWith({
        data: {
          userId: 1,
          ruleId: 10,
          purchaseId: 1,
        },
      });
      expect(mockPrismaClient.purchase.create).toHaveBeenCalledWith({
        data: {amount: 10, asset: 'AAPL', userId: 1},
      });
      expect(rulePurchase).toEqual(mockRulePurchase);
    });
  });
});
