import {singleton, injectable} from 'tsyringe';
import {TradeRepository} from '../../lib/data-access/trade.repository';
import {ITradeApi, Order, OrderResponse} from '../../lib/trade-api/ITradeApi';

@injectable()
class TradeService {
  private tradeRepository: TradeRepository;
  private tradeApi: ITradeApi;

  constructor(tradeApi: ITradeApi) {
    this.tradeRepository = new TradeRepository();
    this.tradeApi = tradeApi;
  }

  getTrades(userId: number) {
    return Promise.all([
      this.tradeRepository.getPurchasesByUserId(userId),
      this.tradeRepository.getSalesByUserId(userId),
    ]);
  }

  async purchase(userId: number, symbol: string, qty: number, orderType: string, price?: number) {
    const order: Order = {
      symbol,
      qty,
      orderType,
      price,
    };
    const orderResponse: OrderResponse = await this.tradeApi.placeOrder(order);
    await this.tradeRepository.createPurchase({
      amount: qty,
      asset: symbol,
      userId,
    });
    return orderResponse;
  }

  async sale(userId: number, symbol: string, qty: number, orderType: string, price?: number) {
    const orderResponse: OrderResponse = await this.tradeApi.placeOrder({
      symbol,
      qty,
      orderType,
      price,
    });
    await this.tradeRepository.createSale({
      amount: qty,
      asset: symbol,
      userId,
    });
    return orderResponse;
  }

  async createTrade(tradeDetails: any) {
    // Simulate trade creation logic
    // In a real implementation, this would interact with the tradeApi and tradeRepository
    return {id: 'mock-id', ...tradeDetails};
  }

  async getTradeById(tradeId: string) {
    // Simulate fetching a trade by ID
    if (tradeId === '123') {
      return {
        id: tradeId,
        symbol: 'AAPL',
        type: 'BUY',
        quantity: 10,
        price: 150,
        orderType: 'MARKET',
      };
    }
    return null;
  }

  async getTradeHistory(userId: string) {
    // Simulate fetching trade history for a user
    return [
      {
        id: '1',
        symbol: 'AAPL',
        type: 'BUY',
        quantity: 10,
        price: 150,
        orderType: 'MARKET',
      },
      {
        id: '2',
        symbol: 'GOOG',
        type: 'SELL',
        quantity: 5,
        price: 2000,
        orderType: 'LIMIT',
      },
    ];
  }
}

export default TradeService;
