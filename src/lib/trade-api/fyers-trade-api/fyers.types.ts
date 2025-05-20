// Fyers API v3 types (aligned with https://myapi.fyers.in/docsv3)

// Order Placement
export interface FyersOrderPayload {
  symbol: string;
  qty: number;
  type: number; // 1=Limit, 2=Market, 3=SL, 4=SL-M
  side: number; // 1=Buy, -1=Sell
  productType: string; // CNC, INTRADAY, etc.
  limitPrice: number;
  stopPrice: number;
  disclosedQty: number;
  validity: string; // DAY, IOC
  offlineOrder: boolean;
  orderTag?: string;
}

export interface FyersOrderResponse {
  s: 'ok' | 'error';
  code: number;
  message: string;
  id?: string; // Order ID if success
}

// Funds/Balance
export interface FyersFundLimit {
  id: number;
  title: string;
  equityAmount: number;
  commodityAmount: number;
  currencyAmount: number;
}
export interface FyersBalanceResponse {
  s: 'ok' | 'error';
  code: number;
  message: string;
  fund_limit?: FyersFundLimit[];
}

// Quotes
export interface FyersQuote {
  symbol: string;
  last_price: number;
  ch: number;
  chp: number;
  open_price: number;
  high_price: number;
  low_price: number;
  prev_close_price: number;
  volume: number;
  // ...other fields as per Fyers docs
}
export interface FyersQuotesResponse {
  s: 'ok' | 'error';
  code: number;
  message: string;
  d?: FyersQuote[];
}

// Order Status
export interface FyersOrderStatusResponse {
  s: 'ok' | 'error';
  code: number;
  message: string;
  orderDetails?: any; // You can expand this as per Fyers docs
}

// Cancel Order
export interface FyersCancelOrderResponse {
  s: 'ok' | 'error';
  code: number;
  message: string;
  id?: string;
}

// Trade History
export interface FyersTrade {
  id: string; // Trade ID
  orderId: string;
  symbol: string;
  qty: number;
  price: number;
  side: number; // 1=Buy, -1=Sell
  tradeTime: string; // ISO timestamp
  // ...add more fields as per Fyers docs
}

export interface FyersTradeHistoryResponse {
  s: 'ok' | 'error';
  code: number;
  message: string;
  trades?: FyersTrade[];
}
