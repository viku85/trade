/**
 * Generic trading API interface for any broker/provider.
 *
 * Each provider should implement this interface with its own types for orders, responses, trades, etc.
 *
 * Example usage:
 *   class FyersTradeApi implements ITradeApi<FyersOrderPayload, FyersOrderResponse, FyersTrade, FyersOrderStatusResponse, FyersCancelOrderResponse> { ... }
 */
export interface ITradeApi<
  TOrder = any,
  TOrderResponse = any,
  TTrade = any,
  TOrderStatus = any,
  TCancelOrder = any
> {
  placeOrder(order: TOrder): Promise<TOrderResponse>;
  getTrades(accountId: string): Promise<TTrade[]>;
  cancelOrder(orderId: string): Promise<TCancelOrder>;
  getOrderStatus(orderId: string): Promise<TOrderStatus>;
  getUserBalance(userId: string): Promise<number>;
}

// These aliases are for internal use and can be overridden per provider implementation
export type Order = any;
export type OrderResponse = any;
