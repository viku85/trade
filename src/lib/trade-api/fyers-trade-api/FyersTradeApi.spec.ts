import { FyersTradeApi } from './FyersTradeApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('FyersTradeApi', () => {
  const apiKey = 'testApiKey';
  const accessToken = 'testAccessToken';
  let fyersTradeApi: FyersTradeApi;

  beforeEach(() => {
    fyersTradeApi = new FyersTradeApi(apiKey, accessToken);
    mockedAxios.create.mockReturnThis(); // Mock the create method
    mockedAxios.request.mockClear(); // Clear request mock calls before each test
  });

  describe('placeOrder', () => {
    it('should construct the correct API request for placing an order and handle success', async () => {
      const orderPayload = {
        symbol: 'NSE:RELIANCE-EQ',
        qty: 10,
        type: 2, // Market order
        side: 1, // Buy
        productType: 'CNC',
        limitPrice: 0,
        stopPrice: 0,
        validity: 'DAY',
        disclosedQty: 0,
        offlineOrder: false,
      };
      const mockApiResponse = {
        s: 'ok',
        code: 200,
        message: 'Order placed successfully',
        id: 'order123',
      };

      mockedAxios.request.mockResolvedValueOnce({ data: mockApiResponse });

      const result = await fyersTradeApi.placeOrder(orderPayload);

      expect(mockedAxios.request).toHaveBeenCalledWith({
        method: 'POST',
        url: '/orders',
        data: orderPayload,
        headers: {
          Authorization: `Bearer ${apiKey}:${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      expect(result).toEqual(mockApiResponse);
    });

    it('should handle API errors when placing an order', async () => {
      const orderPayload = {
        symbol: 'NSE:RELIANCE-EQ',
        qty: 10,
        type: 2,
        side: 1,
        productType: 'CNC',
        limitPrice: 0,
        stopPrice: 0,
        validity: 'DAY',
        disclosedQty: 0,
        offlineOrder: false,
      };
      const mockErrorResponse = {
        s: 'error',
        code: 400,
        message: 'Invalid order parameters',
      };

      mockedAxios.request.mockResolvedValueOnce({ data: mockErrorResponse });

      await expect(fyersTradeApi.placeOrder(orderPayload)).rejects.toThrow('Fyers API Error: Invalid order parameters (Code: 400)');

      expect(mockedAxios.request).toHaveBeenCalledWith({
        method: 'POST',
        url: '/orders',
        data: orderPayload,
        headers: {
          Authorization: `Bearer ${apiKey}:${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
    });

    it('should handle network errors when placing an order', async () => {
        const orderPayload = {
            symbol: 'NSE:RELIANCE-EQ',
            qty: 10,
            type: 2,
            side: 1,
            productType: 'CNC',
            limitPrice: 0,
            stopPrice: 0,
            validity: 'DAY',
            disclosedQty: 0,
            offlineOrder: false,
          };
      const networkError = new Error('Network Error');
      mockedAxios.request.mockRejectedValueOnce(networkError);

      await expect(fyersTradeApi.placeOrder(orderPayload)).rejects.toThrow('Network Error');
    });
  });

  describe('getBalances', () => {
    it('should construct the correct API request for getting balances and handle success', async () => {
      const mockApiResponse = {
        s: 'ok',
        code: 200,
        message: '',
        fund_limit: [
          {
            id: 1,
            title: 'Equity',
            equityTotal: 100000,
            commodityTotal: 0,
            currencyTotal: 0,
          },
        ],
      };

      mockedAxios.request.mockResolvedValueOnce({ data: mockApiResponse });

      const result = await fyersTradeApi.getBalances();

      expect(mockedAxios.request).toHaveBeenCalledWith({
        method: 'GET',
        url: '/funds',
        headers: {
          Authorization: `Bearer ${apiKey}:${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      expect(result).toEqual(mockApiResponse);
    });

    it('should handle API errors when getting balances', async () => {
      const mockErrorResponse = {
        s: 'error',
        code: 401,
        message: 'Unauthorized',
      };

      mockedAxios.request.mockResolvedValueOnce({ data: mockErrorResponse });

      await expect(fyersTradeApi.getBalances()).rejects.toThrow('Fyers API Error: Unauthorized (Code: 401)');

      expect(mockedAxios.request).toHaveBeenCalledWith({
        method: 'GET',
        url: '/funds',
        headers: {
          Authorization: `Bearer ${apiKey}:${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
    });
  });

  describe('getQuotes', () => {
    it('should construct the correct API request for getting quotes and handle success', async () => {
      const symbols = ['NSE:RELIANCE-EQ', 'NSE:TCS-EQ'];
      const mockApiResponse = {
        s: 'ok',
        code: 200,
        message: '',
        d: [
          { symbol: 'NSE:RELIANCE-EQ', cmp: 2500 },
          { symbol: 'NSE:TCS-EQ', cmp: 3500 },
        ],
      };

      mockedAxios.request.mockResolvedValueOnce({ data: mockApiResponse });

      const result = await fyersTradeApi.getQuotes(symbols);

      expect(mockedAxios.request).toHaveBeenCalledWith({
        method: 'GET',
        url: '/quotes?symbols=NSE:RELIANCE-EQ,NSE:TCS-EQ',
        headers: {
          Authorization: `Bearer ${apiKey}:${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      expect(result).toEqual(mockApiResponse);
    });

    it('should handle API errors when getting quotes', async () => {
      const symbols = ['NSE:RELIANCE-EQ'];
      const mockErrorResponse = {
        s: 'error',
        code: 404,
        message: 'Symbols not found',
      };

      mockedAxios.request.mockResolvedValueOnce({ data: mockErrorResponse });

      await expect(fyersTradeApi.getQuotes(symbols)).rejects.toThrow('Fyers API Error: Symbols not found (Code: 404)');

      expect(mockedAxios.request).toHaveBeenCalledWith({
        method: 'GET',
        url: '/quotes?symbols=NSE:RELIANCE-EQ',
        headers: {
          Authorization: `Bearer ${apiKey}:${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
    });
  });
});