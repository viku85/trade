import TradeService from './trade.service';
import {TradeRepository} from '../../lib/data-access/trade.repository';

jest.mock('../../lib/data-access/trade.repository');

describe('TradeService', () => {
  let tradeService: TradeService;
  let mockRepo: jest.Mocked<TradeRepository>;

  beforeEach(() => {
    const now = new Date();
    mockRepo = new TradeRepository() as jest.Mocked<TradeRepository>;
    mockRepo.getPurchasesByUserId.mockResolvedValue([
      {id: 1, asset: 'AAPL', amount: 10, userId: 1, createdAt: now, updatedAt: now},
    ]);
    mockRepo.getSalesByUserId.mockResolvedValue([
      {id: 2, asset: 'GOOG', amount: 5, userId: 1, createdAt: now, updatedAt: now},
    ]);
    tradeService = new TradeService({
      /* mock ITradeApi here */
    } as any);
    (tradeService as any).tradeRepository = mockRepo;
  });

  it('should return mocked trades', async () => {
    const result = await tradeService.getTrades(1);
    // Use toMatchObject to ignore createdAt/updatedAt
    expect(result[0]).toMatchObject([{id: 1, asset: 'AAPL', amount: 10, userId: 1}]);
    expect(result[1]).toMatchObject([{id: 2, asset: 'GOOG', amount: 5, userId: 1}]);
  });
});
