import {UserRepository} from './modules/user/user.repository'; // Adjust path if needed
import {RuleCacheService} from './modules/rule/rule-cache.service'; // Adjust path if needed
import FyersWebSocketClient from './lib/trade-api/fyers-trade-api/FyersWebSocketClient';
import {RuleEngine} from './lib/rule-engine/rule-engine'; // Adjust path if needed
import {ITradeApi} from './lib/trade-api/ITradeApi'; // Adjust path if needed
import TradeService from './modules/trade/trade.service'; // Adjust path if needed
import {TradeRepository} from './lib/data-access/trade.repository'; // Adjust path if needed
import {TradeRuleEvaluatorService} from './modules/trade/trade-rule-evaluator.service'; // Adjust path if needed

export async function initializeRealTimeTrading() {
  // Initialize Repositories
  const userRepository = new UserRepository(); // Or use dependency injection if available
  const tradeRepository = new TradeRepository(); // Or use dependency injection if available

  // Initialize Services
  const ruleCacheService = new RuleCacheService(userRepository);
  const ruleEngine = new RuleEngine(); // Initialize RuleEngine
  const tradeApi: ITradeApi = {} as any; // Initialize your ITradeApi implementation (e.g., FyersTradeApi)
  const tradeService = new TradeService(tradeApi);

  // Build Rule Cache
  await ruleCacheService.buildCache();

  // Get Symbols from Cache
  const symbolsToSubscribe = ruleCacheService.getAllSymbolsWithRules();

  // Initialize WebSocket Client
  const fyersWebSocketClient = new FyersWebSocketClient({
    accessToken: process.env.FYERS_ACCESS_TOKEN || '',
    symbolList: symbolsToSubscribe,
  }); // Initialize WebSocket Client

  // Subscribe to symbols using the public method for testability
  fyersWebSocketClient.subscribeToSymbols(symbolsToSubscribe);

  // Set up Market Data Flow
  fyersWebSocketClient.onMarketData((marketData: any) => {
    tradeRuleEvaluatorService.evaluateTradeRulesForUser(marketData);
  });

  // Initialize Trade Rule Evaluator
  const tradeRuleEvaluatorService = new TradeRuleEvaluatorService(
    ruleEngine,
    userRepository, // Or pass only necessary user data
    tradeApi,
    ruleCacheService,
    tradeService,
    tradeRepository
  );

  console.log('Real-time trading initialization complete.');

  // Return initialized services if needed for other parts of the app
  return {
    userRepository,
    ruleCacheService,
    fyersWebSocketClient,
    ruleEngine,
    tradeApi,
    tradeService,
    tradeRepository,
    tradeRuleEvaluatorService,
  };
}
