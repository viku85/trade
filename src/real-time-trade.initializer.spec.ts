import {
  initializeRealTimeTrading
} from '../src/real-time-trade.initializer';

// Mocking all dependencies
const mockUserRepository = {
  // Mock methods used in initializer if any
};
const mockTradeRepository = {
  // Mock methods used in initializer if any
};
const mockRuleCacheService = {
  buildCache: jest.fn(),
  getAllSymbolsWithRules: jest.fn().mockReturnValue(['SYMBOL1', 'SYMBOL2']),
  // Mock other methods if used
};
const mockRuleEngine = {
  // Mock methods if used
};
const mockTradeApi = {
  // Mock methods if used
};
const mockTradeService = {
  // Mock methods if used
};
const mockFyersWebSocketClient = {
  subscribeToSymbols: jest.fn(),
  onMarketData: jest.fn(),
  // Mock other methods if used
};
const mockTradeRuleEvaluatorService = {
  evaluateTradeRulesForUser: jest.fn(),
  // Mock other methods if used
};


// Mocking the constructors to return our mock instances
jest.mock('../src/modules/user/user.repository', () => ({
  UserRepository: jest.fn(() => mockUserRepository),
}));
jest.mock('../src/lib/data-access/trade.repository', () => ({
  TradeRepository: jest.fn(() => mockTradeRepository),
}));
jest.mock('../src/modules/rule/rule-cache.service', () => ({
  RuleCacheService: jest.fn(() => mockRuleCacheService),
}));
jest.mock('../src/lib/rule-engine/rule-engine', () => ({
  RuleEngine: jest.fn(() => mockRuleEngine),
}));
jest.mock('../src/lib/trade-api/ITradeApi', () => ({
  // Assuming ITradeApi is an interface and we are mocking an implementation
}));
jest.mock('../src/modules/trade/trade.service', () => ({
  TradeService: jest.fn(() => mockTradeService),
}));
jest.mock('../src/lib/fyers/fyers-websocket-client', () => ({
  FyersWebSocketClient: jest.fn(() => mockFyersWebSocketClient),
}));
jest.mock('../src/modules/trade/trade-rule-evaluator.service', () => ({
  TradeRuleEvaluatorService: jest.fn(() => mockTradeRuleEvaluatorService),
}));


describe('initializeRealTimeTrading', () => {
  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();
  });

  it('should create instances of all expected services and repositories', async () => {
    await initializeRealTimeTrading();

    expect(require('../src/modules/user/user.repository').UserRepository).toHaveBeenCalledTimes(1);
    expect(require('../src/lib/data-access/trade.repository').TradeRepository).toHaveBeenCalledTimes(1);
    expect(require('../src/modules/rule/rule-cache.service').RuleCacheService).toHaveBeenCalledTimes(1);
    expect(require('../src/lib/rule-engine/rule-engine').RuleEngine).toHaveBeenCalledTimes(1);
    expect(require('../src/modules/trade/trade.service').TradeService).toHaveBeenCalledTimes(1);
    expect(require('../src/lib/fyers/fyers-websocket-client').FyersWebSocketClient).toHaveBeenCalledTimes(1);
    expect(require('../src/modules/trade/trade-rule-evaluator.service').TradeRuleEvaluatorService).toHaveBeenCalledTimes(1);

    // Check if services are instantiated with correct dependencies (basic check)
    expect(require('../src/modules/rule/rule-cache.service').RuleCacheService).toHaveBeenCalledWith(mockUserRepository);
    expect(require('../src/modules/trade/trade.service').TradeService).toHaveBeenCalledWith({}); // Assuming ITradeApi mock is an empty object
    expect(require('../src/modules/trade/trade-rule-evaluator.service').TradeRuleEvaluatorService).toHaveBeenCalledWith(
      mockRuleEngine,
      mockUserRepository,
      {}, // Assuming ITradeApi mock is an empty object
      mockRuleCacheService,
      mockTradeService,
      mockTradeRepository
    );
  });

  it('should call buildCache on RuleCacheService', async () => {
    await initializeRealTimeTrading();
    expect(mockRuleCacheService.buildCache).toHaveBeenCalledTimes(1);
  });

  it('should call getAllSymbolsWithRules on RuleCacheService', async () => {
    await initializeRealTimeTrading();
    expect(mockRuleCacheService.getAllSymbolsWithRules).toHaveBeenCalledTimes(1);
  });

  it('should call subscribeToSymbols on FyersWebSocketClient with symbols from cache', async () => {
    const symbols = ['SYMBOL1', 'SYMBOL2'];
    mockRuleCacheService.getAllSymbolsWithRules.mockReturnValueOnce(symbols);

    await initializeRealTimeTrading();

    expect(mockFyersWebSocketClient.subscribeToSymbols).toHaveBeenCalledTimes(1);
    expect(mockFyersWebSocketClient.subscribeToSymbols).toHaveBeenCalledWith(symbols);
  });

  it('should set up onMarketData handler to call evaluateTradeRulesForUser', async () => {
    await initializeRealTimeTrading();

    expect(mockFyersWebSocketClient.onMarketData).toHaveBeenCalledTimes(1);
    const marketDataHandler = mockFyersWebSocketClient.onMarketData.mock.calls[0][0];

    const mockMarketData = {
      symbol: 'TESTSYM',
      price: 100
    };
    marketDataHandler(mockMarketData);

    expect(mockTradeRuleEvaluatorService.evaluateTradeRulesForUser).toHaveBeenCalledTimes(1);
    expect(mockTradeRuleEvaluatorService.evaluateTradeRulesForUser).toHaveBeenCalledWith(mockMarketData);
  });

  it('should return initialized services and repositories', async () => {
    const result = await initializeRealTimeTrading();

    expect(result).toEqual({
      userRepository: mockUserRepository,
      ruleCacheService: mockRuleCacheService,
      fyersWebSocketClient: mockFyersWebSocketClient,
      ruleEngine: mockRuleEngine,
      tradeApi: {}, // Assuming ITradeApi mock is an empty object
      tradeService: mockTradeService,
      tradeRepository: mockTradeRepository,
      tradeRuleEvaluatorService: mockTradeRuleEvaluatorService,
    });
  });
});