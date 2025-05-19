import {TradeRuleEvaluatorService} from './trade-rule-evaluator.service';
import {RuleCacheService} from '../rule/rule-cache.service';
import {RuleEngine} from '../../lib/rule-engine/rule-engine';
import TradeService from './trade.service';
import {MarketData} from './trade.types';
import {Rule} from '../../lib/rule-engine/types/Rule';
import {UserRepository} from '../user/user.repository';
import {ITradeApi} from 'src/lib/trade-api/ITradeApi';
import {TradeRepository} from './trade.repository';

// Mock dependencies
jest.mock('../rule/rule-cache.service');
jest.mock('../../lib/rule-engine/rule-engine');
jest.mock('./trade.service');
jest.mock('../user/user.repository');
jest.mock('./trade.repository');

const mockTradeApi = {
  getUserBalance: jest.fn(),
  buy: jest.fn(),
  sell: jest.fn(),
} as unknown as ITradeApi;

describe('TradeRuleEvaluatorService', () => {
  let tradeRuleEvaluatorService: TradeRuleEvaluatorService;
  let ruleCacheService: jest.Mocked<RuleCacheService>;
  let ruleEngine: jest.Mocked<RuleEngine>;
  let tradeService: jest.Mocked<TradeService>;
  let userRepository: jest.Mocked<UserRepository>;
  let tradeRepository: jest.Mocked<TradeRepository>;

  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();

    // Get mocked instances
    ruleCacheService = new RuleCacheService(new UserRepository()) as jest.Mocked<RuleCacheService>;
    ruleEngine = new RuleEngine() as jest.Mocked<RuleEngine>;
    tradeService = new TradeService(
      mockTradeApi,
      new TradeRepository()
    ) as jest.Mocked<TradeService>;
    userRepository = new UserRepository() as jest.Mocked<UserRepository>;
    tradeRepository = new TradeRepository() as jest.Mocked<TradeRepository>;

    // Create a new instance of TradeRuleEvaluatorService with mocked dependencies
    tradeRuleEvaluatorService = new TradeRuleEvaluatorService(
      ruleEngine,
      userRepository,
      mockTradeApi,
      ruleCacheService,
      tradeService,
      tradeRepository
    );
  });

  it('should be defined', () => {
    expect(tradeRuleEvaluatorService).toBeDefined();
  });

  describe('evaluateTradeRulesForUser', () => {
    const mockMarketData: MarketData = {
      symbol: 'AAPL',
      price: 150,
      timestamp: Date.now(),
    };

    const mockRule: Rule = {
      id: 'rule-1',
      name: 'Buy AAPL',
      symbol: 'AAPL',
      type: {type: 'static', field: 'price', operator: 'lt', value: 160},
      condition: {type: 'BUY', quantity: 10},
    };

    it('should correctly identify relevant rules and evaluate them', async () => {
      ruleCacheService.getRulesBySymbol.mockReturnValue([mockRule]);
      ruleEngine.evaluate.mockReturnValue(true); // Rule evaluates to true

      await tradeRuleEvaluatorService.evaluateTradeRules(mockMarketData);

      expect(ruleCacheService.getRulesBySymbol).toHaveBeenCalledWith('AAPL');
      expect(ruleEngine.evaluate).toHaveBeenCalledWith(mockRule, mockMarketData);
    });

    it('should trigger trade execution when rule evaluates to true', async () => {
      ruleCacheService.getRulesBySymbol.mockReturnValue([mockRule]);
      ruleEngine.evaluate.mockReturnValue(true); // Rule evaluates to true

      await tradeRuleEvaluatorService.evaluateTradeRulesForUser(mockMarketData);

      expect(tradeService.executeTrade).toHaveBeenCalledWith(mockRule.action, mockMarketData);
    });

    it('should not trigger trade execution when rule evaluates to false', async () => {
      ruleCacheService.getRulesBySymbol.mockReturnValue([mockRule]);
      ruleEngine.evaluate.mockReturnValue(false); // Rule evaluates to false

      await tradeRuleEvaluatorService.evaluateTradeRulesForUser(mockMarketData);

      expect(tradeService.executeTrade).not.toHaveBeenCalled();
    });

    it('should handle cases where no relevant rules are found', async () => {
      ruleCacheService.getRulesBySymbol.mockReturnValue([]); // No rules found

      await tradeRuleEvaluatorService.evaluateTradeRulesForUser(mockMarketData);

      expect(ruleCacheService.getRulesBySymbol).toHaveBeenCalledWith('AAPL');
      expect(ruleEngine.evaluate).not.toHaveBeenCalled();
      expect(tradeService.executeTrade).not.toHaveBeenCalled();
    });

    it('should handle errors during rule evaluation', async () => {
      ruleCacheService.getRulesBySymbol.mockReturnValue([{userId: '1', rule: mockRule}]);
      const evaluationError = new Error('Evaluation failed');
      ruleEngine.evaluate.mockImplementation(() => {
        throw evaluationError;
      });

      await tradeRuleEvaluatorService.evaluateTradeRules(mockMarketData);

      expect(ruleCacheService.getRulesBySymbol).toHaveBeenCalledWith('AAPL');
      expect(ruleEngine.evaluate).toHaveBeenCalledWith(mockRule, mockMarketData);
      expect(tradeService.executeTrade).not.toHaveBeenCalled();
      // You might want to add logging tests here to ensure the error is logged
      // For example: expect(console.error).toHaveBeenCalledWith(...)
    });

    it('should handle errors during trade execution', async () => {
      ruleCacheService.getRulesBySymbol.mockReturnValue([mockRule]);
      ruleEngine.evaluate.mockReturnValue(true);
      const executionError = new Error('Trade execution failed');
      tradeService.executeTrade.mockImplementation(() => {
        throw executionError;
      });

      await tradeRuleEvaluatorService.evaluateTradeRules(mockMarketData);

      expect(ruleCacheService.getRulesBySymbol).toHaveBeenCalledWith('AAPL');
      expect(ruleEngine.evaluate).toHaveBeenCalledWith(mockRule, mockMarketData);
      expect(tradeService.executeTrade).toHaveBeenCalledWith(mockRule.action, mockMarketData);
      // You might want to add logging tests here to ensure the error is logged
      // For example: expect(console.error).toHaveBeenCalledWith(...)
    });

    it('should evaluate multiple relevant rules', async () => {
      const mockRule2: Rule = {
        id: 'rule-2',
        name: 'Sell AAPL',
        symbol: 'AAPL',
        type: {type: 'static', field: 'price', operator: 'gt', value: 140},
        condition: {type: 'SELL', quantity: 5},
      };
      ruleCacheService.getRulesBySymbol.mockReturnValue([
        {userId: '1', rule: mockRule},
        {userId: '1', rule: mockRule2},
      ]);
      ruleEngine.evaluate.mockImplementation((rule: Rule) => (rule.id === 'rule-1' ? true : false)); // Mock different evaluation results

      await tradeRuleEvaluatorService.evaluateTradeRules(mockMarketData);

      expect(ruleCacheService.getRulesBySymbol).toHaveBeenCalledWith('AAPL');
      expect(ruleEngine.evaluate).toHaveBeenCalledWith(mockRule, mockMarketData);
      expect(ruleEngine.evaluate).toHaveBeenCalledWith(mockRule2, mockMarketData);
      expect(tradeService.executeTrade).toHaveBeenCalledWith(mockRule.action, mockMarketData);
      expect(tradeService.executeTrade).not.toHaveBeenCalledWith(mockRule2.action, mockMarketData);
    });
  });
});
