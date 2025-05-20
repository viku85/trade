import axios, {AxiosRequestConfig} from 'axios';
import {ITradeApi, Order, OrderResponse} from '../ITradeApi';
import {
  FyersOrderPayload,
  FyersOrderResponse,
  FyersBalanceResponse,
  FyersQuotesResponse,
  FyersOrderStatusResponse,
  FyersCancelOrderResponse,
  FyersTrade,
  FyersTradeHistoryResponse,
} from './fyers.types';

export class FyersTradeApi implements ITradeApi {
  private apiKey: string;
  private accessToken: string;
  private axiosInstance: typeof axios;

  constructor(apiKey: string, accessToken: string) {
    this.apiKey = apiKey;
    this.accessToken = accessToken;
    this.axiosInstance = axios;
  }

  private async request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    // Add auth headers if not present
    config.headers = {
      Authorization: `Bearer ${this.apiKey}:${this.accessToken}`,
      'Content-Type': 'application/json',
      ...(config.headers || {}),
    };
    const response = await this.axiosInstance.request<T>(config);
    return response.data;
  }

  async placeOrder(orderPayload: FyersOrderPayload): Promise<FyersOrderResponse> {
    const data = await this.request<FyersOrderResponse>({
      method: 'POST',
      url: '/orders',
      data: orderPayload,
    });
    if (data.s === 'ok') {
      return data;
    } else {
      throw new Error(`Fyers API Error: ${data.message} (Code: ${data.code})`);
    }
  }

  async getBalances(): Promise<FyersBalanceResponse> {
    const data = await this.request<FyersBalanceResponse>({
      method: 'GET',
      url: '/funds',
    });
    if (data.s === 'ok') {
      return data;
    } else {
      throw new Error(`Fyers API Error: ${data.message} (Code: ${data.code})`);
    }
  }

  async getQuotes(symbols: string[]): Promise<FyersQuotesResponse> {
    const data = await this.request<FyersQuotesResponse>({
      method: 'GET',
      url: `/quotes?symbols=${symbols.join(',')}`,
    });
    if (data.s === 'ok') {
      return data;
    } else {
      throw new Error(`Fyers API Error: ${data.message} (Code: ${data.code})`);
    }
  }

  // Stub implementations for interface completeness
  async getTrades(accountId: string): Promise<FyersTrade[]> {
    // Fyers trade history endpoint: /tradebook (GET)
    const data = await this.request<FyersTradeHistoryResponse>({
      method: 'GET',
      url: '/tradebook',
    });
    if (data.s === 'ok' && data.trades) {
      return data.trades;
    } else {
      throw new Error(`Fyers API Error: ${data.message} (Code: ${data.code})`);
    }
  }
  async cancelOrder(orderId: string): Promise<FyersCancelOrderResponse> {
    // Fyers cancel order endpoint: /orders/{orderId} with DELETE method
    const data = await this.request<FyersCancelOrderResponse>({
      method: 'DELETE',
      url: `/orders/${orderId}`,
    });
    if (data.s === 'ok') {
      return data;
    } else {
      throw new Error(`Fyers API Error: ${data.message} (Code: ${data.code})`);
    }
  }
  async getOrderStatus(orderId: string): Promise<FyersOrderStatusResponse> {
    // Fyers order status endpoint: /orders/{orderId}
    const data = await this.request<FyersOrderStatusResponse>({
      method: 'GET',
      url: `/orders/${orderId}`,
    });
    if (data.s === 'ok') {
      return data;
    } else {
      throw new Error(`Fyers API Error: ${data.message} (Code: ${data.code})`);
    }
  }
  async getUserBalance(userId: string): Promise<number> {
    // Fyers API does not use userId in the endpoint, so we ignore it
    const data = await this.getBalances();
    if (data.s === 'ok' && data.fund_limit && data.fund_limit.length > 0) {
      // Return the equity balance (total) from the first fund_limit entry
      const equity = data.fund_limit[0].equityAmount ?? 0;
      return equity;
    } else {
      throw new Error('Unable to fetch user balance');
    }
  }
}
