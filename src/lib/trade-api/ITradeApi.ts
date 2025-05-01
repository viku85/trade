interface ITradeApi {
  placeOrder(order: any): Promise<any>;
  getTrades(accountId: string): Promise<any>;
  cancelOrder(orderId: string): Promise<any>;
  getOrderStatus(orderId: string): Promise<any>;
  getUserBalance(userId: string): Promise<number>;
}