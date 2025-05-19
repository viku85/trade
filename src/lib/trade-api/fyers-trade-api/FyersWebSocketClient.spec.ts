import { FyersWebSocketClient } from './FyersWebSocketClient'; // Adjust the import path as necessary
import WebSocket from 'ws'; // Assuming 'ws' is used for WebSocket; mock this

// Mock the 'ws' library
jest.mock('ws');

const mockWebSocket = {
  on: jest.fn(),
  send: jest.fn(),
  close: jest.fn(),
};

// Cast the mocked WebSocket to the mock type
const MockWebSocket = WebSocket as jest.MockedClass<typeof WebSocket>;

describe('FyersWebSocketClient', () => {
  let client: FyersWebSocketClient;
  const mockApiUrl = 'wss://test.fyers.com';
  const mockAccessToken = 'mock_access_token';

  beforeEach(() => {
    // Reset mock before each test
    MockWebSocket.mockClear();
    mockWebSocket.on.mockClear();
    mockWebSocket.send.mockClear();
    mockWebSocket.close.mockClear();

    // Configure the mock WebSocket constructor to return our mock instance
    MockWebSocket.mockImplementation(() => mockWebSocket as any);

    client = new FyersWebSocketClient(mockApiUrl, mockAccessToken);
  });

  describe('constructor', () => {
    it('should create a new WebSocket instance with the correct URL', () => {
      expect(MockWebSocket).toHaveBeenCalledWith(`${mockApiUrl}?access_token=${mockAccessToken}`);
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
      const symbols = ['NSE:SBIN-EQ', 'NSE:RELIANCE-EQ'];
      client.subscribeToSymbols(symbols);

      expect(mockWebSocket.send).toHaveBeenCalledWith(JSON.stringify({
        a: 'subscribe',
        o: { symbols: symbols.join(',') }
      }));
    });

    it('should not send a message if no symbols are provided', () => {
      client.subscribeToSymbols([]);
      expect(mockWebSocket.send).not.toHaveBeenCalled();
    });
  });

  describe('onMarketData', () => {
    it('should register a callback that is called when a message is received', () => {
      const mockCallback = jest.fn();
      client.onMarketData(mockCallback);

      // Simulate receiving a message
      const messageHandler = mockWebSocket.on.mock.calls.find(call => call[0] === 'message')[1];
      const mockMarketData = { symbol: 'NSE:SBIN-EQ', price: 1000 };
      messageHandler(JSON.stringify(mockMarketData));

      expect(mockCallback).toHaveBeenCalledWith(mockMarketData);
    });

    it('should parse the received message as JSON', () => {
      const mockCallback = jest.fn();
      client.onMarketData(mockCallback);

      const messageHandler = mockWebSocket.on.mock.calls.find(call => call[0] === 'message')[1];
      const mockMarketDataString = '{"symbol":"NSE:SBIN-EQ","price":1000}';
      messageHandler(mockMarketDataString);

      expect(mockCallback).toHaveBeenCalledWith(JSON.parse(mockMarketDataString));
    });

    it('should handle non-JSON messages gracefully (e.g., log or ignore)', () => {
        const mockCallback = jest.fn();
        client.onMarketData(mockCallback);
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        const messageHandler = mockWebSocket.on.mock.calls.find(call => call[0] === 'message')[1];
        messageHandler('This is not a JSON message');

        expect(mockCallback).not.toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalled(); // Or check for a specific log message

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

  describe('Closing Connection', () => {
    it('should call the close method on the WebSocket instance', () => {
      client.close();
      expect(mockWebSocket.close).toHaveBeenCalled();
    });

    it('should log when the connection is closed', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const closeHandler = mockWebSocket.on.mock.calls.find(call => call[0] === 'close')[1];
        const mockEvent = { code: 1000, reason: 'Normal Closure' };
        closeHandler(mockEvent.code, mockEvent.reason);

        expect(consoleSpy).toHaveBeenCalledWith('WebSocket connection closed:', mockEvent.code, mockEvent.reason);

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