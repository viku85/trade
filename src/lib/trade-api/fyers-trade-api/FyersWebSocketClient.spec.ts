import FyersWebSocketClient from './FyersWebSocketClient';
import WebSocket from 'ws';

// Mock the 'ws' library
jest.mock('ws');

const mockWebSocket = {
  on: jest.fn(),
  send: jest.fn(),
  close: jest.fn(),
  readyState: 1, // Add readyState to simulate open connection
};

const MockWebSocket = WebSocket as jest.MockedClass<typeof WebSocket>;

describe('FyersWebSocketClient', () => {
  let client: FyersWebSocketClient;
  const mockApiUrl = 'wss://test.fyers.com';
  const mockAccessToken = 'mock_access_token';
  const mockConfig = {accessToken: mockAccessToken, symbolList: [], wsUrl: mockApiUrl};

  beforeEach(() => {
    MockWebSocket.mockClear();
    mockWebSocket.on.mockClear();
    mockWebSocket.send.mockClear();
    mockWebSocket.close.mockClear();
    MockWebSocket.mockImplementation(() => mockWebSocket as any);
    client = new FyersWebSocketClient(mockConfig);
  });

  describe('constructor', () => {
    it('should create a new WebSocket instance with the correct URL', () => {
      expect(MockWebSocket).toHaveBeenCalledWith(`${mockApiUrl}`);
    });

    it('should set up event listeners for open, message, error, and close', () => {
      expect(mockWebSocket.on).toHaveBeenCalledWith('open', expect.any(Function));
      expect(mockWebSocket.on).toHaveBeenCalledWith('message', expect.any(Function));
      expect(mockWebSocket.on).toHaveBeenCalledWith('error', expect.any(Function));
      expect(mockWebSocket.on).toHaveBeenCalledWith('close', expect.any(Function));
    });
  });

  describe('subscribeToSymbols', () => {
    it('should send the correct subscription message for the given symbols', () => {
      // Simulate WebSocket is open
      mockWebSocket.readyState = 1;
      const symbols = ['NSE:SBIN-EQ', 'NSE:RELIANCE-EQ'];
      client.subscribeToSymbols(symbols);
      const expectedPayload = JSON.stringify({
        a: 'subscribe',
        o: {symbols: symbols.join(',')},
      });
      expect(mockWebSocket.send).toHaveBeenCalledWith(expectedPayload);
    });
  });

  describe('onMarketData', () => {
    it('should register a callback that is called when a message is received', () => {
      const mockCallback = jest.fn();
      client.onMarketData(mockCallback);
      // Simulate a message event by calling the callback registered by .on('message', ...)
      const onCall = mockWebSocket.on.mock.calls.find(call => call[0] === 'message');
      if (onCall) {
        const messageHandler = onCall[1];
        const mockMarketData = {symbol: 'NSE:SBIN-EQ', price: 1000};
        messageHandler(JSON.stringify(mockMarketData));
      }
      expect(mockCallback).toHaveBeenCalledWith({symbol: 'NSE:SBIN-EQ', price: 1000});
    });

    it('should parse the received message as JSON', () => {
      const mockCallback = jest.fn();
      client.onMarketData(mockCallback);
      const onCall = mockWebSocket.on.mock.calls.find(call => call[0] === 'message');
      if (onCall) {
        const messageHandler = onCall[1];
        const mockMarketDataString = '{"symbol":"NSE:SBIN-EQ","price":1000}';
        messageHandler(mockMarketDataString);
      }
      expect(mockCallback).toHaveBeenCalledWith({symbol: 'NSE:SBIN-EQ', price: 1000});
    });

    it('should handle non-JSON messages gracefully (e.g., log or ignore)', () => {
      const mockCallback = jest.fn();
      client.onMarketData(mockCallback);
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const onCall = mockWebSocket.on.mock.calls.find(call => call[0] === 'message');
      if (onCall) {
        const messageHandler = onCall[1];
        messageHandler('This is not a JSON message');
      }
      expect(mockCallback).not.toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('Error Handling', () => {
    it('should log an error when a WebSocket error occurs', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const errorHandler = mockWebSocket.on.mock.calls.find(call => call[0] === 'error')[1];
      const mockError = new Error('WebSocket connection error');
      errorHandler(mockError);
      expect(consoleSpy).toHaveBeenCalledWith('WebSocket error:', mockError);
      consoleSpy.mockRestore();
    });
  });

  describe('Open Event', () => {
    it('should log when the WebSocket connection is opened', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      const openHandler = mockWebSocket.on.mock.calls.find(call => call[0] === 'open')[1];
      openHandler();
      expect(consoleSpy).toHaveBeenCalledWith('WebSocket connection opened.');
      consoleSpy.mockRestore();
    });
  });
});
