export interface Trade {
  id: string;
  symbol: string;
  type: TradeType;
  price: number;
  quantity: number;
  timestamp: Date;
  status: string;
  orderId?: string;
  userId: string;
}

export enum TradeType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export type CreateTradeDto = {
  symbol: string;
  type: TradeType;
  quantity: number;
  price: number;
  orderType: string;
};
