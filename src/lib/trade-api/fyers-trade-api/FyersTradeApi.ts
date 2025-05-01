import { ITradeApi, Order, OrderResult } from '../ITradeApi';
import { FyersAPI } from 'fyers-api-v2';

export class FyersTradeApi implements ITradeApi {
  private fyers: FyersAPI;
  private accessToken: string;

  constructor() {
    const clientId = process.env.FYERS_CLIENT_ID;
    const secretKey = process.env.FYERS_SECRET_KEY;
    const redirectUri = process.env.FYERS_REDIRECT_URI;
    const state = process.env.FYERS_STATE;
    this.accessToken = process.env.FYERS_ACCESS_TOKEN || ''; // Assuming access token is obtained separately

    if (!clientId || !secretKey || !redirectUri || !state || !this.accessToken) {
      throw new Error('Fyers API credentials or access token not provided in environment variables.');
    }

    this.fyers = new FyersAPI();
    this.fyers.setClientValues({
      client_id: clientId,
      secret_key: secretKey,
      redirect_uri: redirectUri,
      state: state,
    });
    this.fyers.setAccessToken(this.accessToken);
  }

  async placeOrder(orderDetails: Order): Promise<OrderResult> {
    try {
      const orderPayload = {
        symbol: orderDetails.symbol,
        qty: orderDetails.quantity,
        type: orderDetails.type, // Market, Limit, etc.
        side: orderDetails.side, // 1 for buy, -1 for sell
        productType: orderDetails.productType, // CNC, MIS, NRML
        limitPrice: orderDetails.limitPrice,
        stopPrice: orderDetails.stopPrice,
        validity: orderDetails.validity, // DAY, IOC, GTT
        disclosedQty: orderDetails.disclosedQuantity,
        offlineOrder: orderDetails.offlineOrder ? 1 : 0,
        // Add other necessary Fyers specific order parameters
      };

      const response = await this.fyers.place_order(orderPayload);

      if (response && response.s === 'ok') {
        return {
          orderId: response.id,
          status: 'success',
          message: response.message,
        };
      } else {
        return {
          orderId: null,
          status: 'failed',
          message: response ? response.message : 'Unknown error',
        };
      }
    } catch (error: any) {
      return {
        orderId: null,
        status: 'failed',
        message: error.message,
      };
    }
  }

  async getOrderStatus(orderId: string): Promise<any> {
    try {
      const response = await this.fyers.orderbook(); // This gets all orders, you might need to filter by orderId
      if (response && response.s === 'ok' && response.orderBook) {
        const order = response.orderBook.find((o: any) => o.id === orderId);
        return order;
      }
      return null;
    } catch (error) {
      console.error('Error fetching order status:', error);
      return null;
    }
  }

  async getTradeBook(): Promise<any> {
    try {
      const response = await this.fyers.tradebook();
      if (response && response.s === 'ok' && response.tradeBook) {
        return response.tradeBook;
      }
      return [];
    } catch (error) {
      console.error('Error fetching trade book:', error);
      return [];
    }
  }

    async getUserBalance(userId: string): Promise<number> {
    try {
      const response = await this.fyers.funds();
      if (response && response.s === 'ok' && response.fund_limit) {
        // Assuming the available balance is in a field like 'cash' or 'available_balance'
        return response.fund_limit[0].cash;
      }
      return 0; // Default to 0 if balance not found or API error
    } catch (error) {
      console.error('Error fetching user balance:', error);
      return 0;
    }
  }
  // Add other methods as needed for Fyers API interactions (e.g., getting quotes, positions)
}