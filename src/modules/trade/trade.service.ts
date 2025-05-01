import TradeRepository from 'src/lib/data-access/trade.repository';
import { ITradeApi, Order, OrderResponse } from 'src/lib/trade-api/ITradeApi';


class TradeService {
  private tradeRepository: TradeRepository;
  private tradeApi: ITradeApi;

  constructor(tradeApi: ITradeApi) {
    this.tradeRepository = new TradeRepository();
    this.tradeApi = tradeApi;
  }

  getTrades(userId: number) {
    return this.tradeRepository.getTradesByUserId(userId);
  }

  async purchase(
    userId: number,
    symbol: string,

    qty: number,
    orderType: string,
    price?: number
  ) {
    const order: Order =  {
      symbol,
      qty,
      orderType,
      price,
    };
    const orderResponse: OrderResponse = await this.tradeApi.placeOrder(order);
    await this.tradeRepository.createPurchase(
      userId,
      {
        asset: symbol,
        amount: qty,
        orderId: orderResponse.orderId,
        orderStatus: orderResponse.orderStatus,
        orderType,
        price: price ? price : 0,
      }
    );

    return orderResponse;
  }

  async sale(
    userId: number,
    symbol: string,
    qty: number,
    orderType: string,
    price?: number
  ) {
    const orderResponse: OrderResponse = await this.tradeApi.placeOrder({ symbol, qty, orderType, price });
    await this.tradeRepository.createSale(userId, {
      asset: symbol,
      amount: qty,
      orderId: orderResponse.orderId,
      orderStatus: orderResponse.orderStatus,
      orderType,
      price: price ? price : 0
    });
    return orderResponse;
  }
}

export default TradeService;
