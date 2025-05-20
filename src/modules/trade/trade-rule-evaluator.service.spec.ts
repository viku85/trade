import 'reflect-metadata';
import {TradeRuleEvaluatorService} from './trade-rule-evaluator.service';
import {RuleCacheService} from '../rule/rule-cache.service';
import {RuleEngine} from '../../lib/rule-engine/rule-engine';
import TradeService from './trade.service';
import {Rule} from '../../lib/rule-engine/types/Rule';
import {UserRepository} from '../user/user.repository';
import {TradeRepository} from '../../lib/data-access/trade.repository';
import {StaticRuleEvaluator} from '../../lib/rule-engine/rule-evaluator/static-rule/static-rule-evaluator';

jest.mock('../rule/rule-cache.service');
jest.mock('../../lib/rule-engine/rule-engine');
jest.mock('./trade.service');
jest.mock('../user/user.repository');
jest.mock('../../lib/data-access/trade.repository');

describe('TradeRuleEvaluatorService', () => {
  let tradeRuleEvaluatorService: TradeRuleEvaluatorService;
  let ruleCacheService: jest.Mocked<RuleCacheService>;
  let ruleEngine: jest.Mocked<RuleEngine>;
  let tradeService: jest.Mocked<TradeService>;
  let userRepository: jest.Mocked<UserRepository>;
  let tradeRepository: jest.Mocked<TradeRepository>;

  beforeEach(() => {
    jest.clearAllMocks();
    ruleCacheService = new RuleCacheService(new UserRepository()) as jest.Mocked<RuleCacheService>;
    ruleEngine = new RuleEngine() as jest.Mocked<RuleEngine>;
    tradeService = new TradeService({
      getUserBalance: jest.fn().mockResolvedValue(1000),
    } as any) as jest.Mocked<TradeService>;
    userRepository = new UserRepository() as jest.Mocked<UserRepository>;
    tradeRepository = new TradeRepository() as jest.Mocked<TradeRepository>;
    (ruleEngine as any).evaluateAll = jest.fn().mockResolvedValue({success: true});
    (tradeService as any).purchase = jest.fn().mockResolvedValue({});
    (tradeService as any).sale = jest.fn().mockResolvedValue({});
    (tradeRepository as any).createRulePurchase = jest.fn().mockResolvedValue({});
    tradeRuleEvaluatorService = new TradeRuleEvaluatorService(
      ruleEngine,
      userRepository,
      {getUserBalance: jest.fn().mockResolvedValue(1000)} as any,
      ruleCacheService,
      tradeService,
      tradeRepository
    );
  });

  it('should evaluate and execute trades for rules that pass', async () => {
    const staticCond = new StaticRuleEvaluator('cond1', 'AAPL buy', "context.symbol === 'AAPL'");
    (staticCond as any).action = 'buy';
    (staticCond as any).quantity = 10;
    const mockRule: Rule = {
      id: '1',
      description: 'desc',
      type: 'static',
      userId: '1',
      conditions: [staticCond],
      conditionOperator: 'AND',
    };
    const mockMarketData = {symbol: 'AAPL', price: 150};
    ruleCacheService.getRulesAndUsersForSymbol = jest
      .fn()
      .mockReturnValue([{userId: '1', rule: mockRule}]);
    await tradeRuleEvaluatorService.evaluateTradeRulesForUser(mockMarketData);
    expect((ruleEngine as any).evaluateAll).toHaveBeenCalled();
    expect((tradeService as any).purchase).toHaveBeenCalled();
    expect((tradeRepository as any).createRulePurchase).toHaveBeenCalled();
  });
});
