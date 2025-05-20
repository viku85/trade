import 'reflect-metadata';
import {RuleCacheService} from './rule-cache.service';
import {UserRepository} from '../user/user.repository';
import {StaticRuleEvaluator} from '../../lib/rule-engine/rule-evaluator/static-rule/static-rule-evaluator';
import {Rule} from '../../lib/rule-engine/types/Rule';

const mockUserRepository = {
  getAllUsersWithRules: jest.fn(),
} as unknown as UserRepository;

describe('RuleCacheService', () => {
  let ruleCacheService: RuleCacheService;
  const testUserId = 'test-user-id';

  beforeEach(() => {
    ruleCacheService = new RuleCacheService(mockUserRepository);
    (ruleCacheService as any).symbolRuleUserMap = new Map<string, {userId: string; rule: Rule}[]>();
    mockUserRepository.getAllUsersWithRules = jest.fn().mockResolvedValue([]);
  });

  it('should be defined', () => {
    expect(ruleCacheService).toBeDefined();
  });

  describe('addRule', () => {
    it('should add a new rule to the cache', async () => {
      const rule: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule);
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol![0].rule).toEqual(rule);
      expect(rulesForSymbol![0].userId).toEqual(testUserId);
    });

    it('should add multiple rules for the same symbol', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const rule2: Rule = {
        id: 'rule2',
        type: 'static',
        description: 'Test Rule 2',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond2', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.addRule(testUserId, rule2);
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(2);
      expect(rulesForSymbol).toEqual([
        {userId: testUserId, rule: rule1},
        {userId: testUserId, rule: rule2},
      ]);
    });

    it('should add rules for different symbols', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const rule2: Rule = {
        id: 'rule2',
        type: 'static',
        description: 'Test Rule 2',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond2', 'GOOG static', "context.symbol === 'GOOG'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.addRule(testUserId, rule2);

      const rulesForAAPL = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      const rulesForGOOG = ruleCacheService.getRulesAndUsersForSymbol('GOOG');
      expect(rulesForAAPL).toHaveLength(1);
      expect(rulesForAAPL![0]).toEqual({userId: testUserId, rule: rule1});
      expect(rulesForGOOG).toHaveLength(1);
      expect(rulesForGOOG![0]).toEqual({userId: testUserId, rule: rule2});
    });
  });

  describe('getRulesAndUsersForSymbol', () => {
    it('should return rules for a specific symbol', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const rule2: Rule = {
        id: 'rule2',
        type: 'static',
        description: 'Test Rule 2',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond2', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.addRule(testUserId, rule2);
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toEqual([
        {userId: testUserId, rule: rule1},
        {userId: testUserId, rule: rule2},
      ]);
    });

    it('should return undefined if no rules exist for the symbol', () => {
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('NONEXISTENT');
      expect(rulesForSymbol).toBeUndefined();
    });
  });

  describe('getAllSymbolsWithRules', () => {
    it('should return all rules from the cache', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const rule2: Rule = {
        id: 'rule2',
        type: 'static',
        description: 'Test Rule 2',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond2', 'GOOG static', "context.symbol === 'GOOG'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.addRule(testUserId, rule2);
      const allSymbols = ruleCacheService.getAllSymbolsWithRules();
      // Order might not be guaranteed in a Map, so check for presence
      expect(allSymbols).toHaveLength(2);
      expect(allSymbols).toContain('AAPL');
      expect(allSymbols).toContain('GOOG');
    });

    it('should return an empty array if the cache is empty', () => {
      const allRules = ruleCacheService.getAllSymbolsWithRules();
      expect(allRules).toEqual([]);
    });
  });

  describe('deleteRule', () => {
    it('should delete a rule from the cache by ID', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const rule2: Rule = {
        id: 'rule2',
        type: 'static',
        description: 'Test Rule 2',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond2', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.addRule(testUserId, rule2);

      await ruleCacheService.deleteRule(testUserId, 'rule1');
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol).not.toContainEqual({userId: testUserId, rule: rule1});
      expect(rulesForSymbol).toContainEqual({userId: testUserId, rule: rule2});
    });

    it('should do nothing if the rule ID does not exist', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);

      await ruleCacheService.deleteRule(testUserId, 'nonexistent-rule');
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol).toContainEqual({userId: testUserId, rule: rule1});
    });

    it('should remove the symbol entry if the last rule for a symbol is deleted', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.deleteRule(testUserId, 'rule1');
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toBeUndefined();
      expect((ruleCacheService as any).symbolRuleUserMap.has('AAPL')).toBe(false);
    });
  });

  describe('updateRule', () => {
    it('should update an existing rule in the cache', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const updatedRule: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Updated Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.updateRule(testUserId, updatedRule);
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol![0]).toEqual({userId: testUserId, rule: updatedRule});
    });

    it('should update a rule when its symbol changes', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const updatedRule: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Updated Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'MSFT static', "context.symbol === 'MSFT'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.updateRule(testUserId, updatedRule);

      const rulesForAAPL = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      const rulesForMSFT = ruleCacheService.getRulesAndUsersForSymbol('MSFT');

      expect(rulesForAAPL).toBeUndefined();
      expect(rulesForMSFT).toHaveLength(1);
      expect(rulesForMSFT![0]).toEqual({userId: testUserId, rule: updatedRule});
      expect((ruleCacheService as any).symbolRuleUserMap.has('AAPL')).toBe(false);
    });

    it('should do nothing if the rule ID to update does not exist', async () => {
      const rule1: Rule = {
        id: 'rule1',
        type: 'static',
        description: 'Test Rule 1',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      const updatedRule: Rule = {
        id: 'nonexistent-rule',
        type: 'static',
        description: 'Updated Test Rule',
        userId: testUserId,
        conditions: [new StaticRuleEvaluator('cond1', 'AAPL static', "context.symbol === 'AAPL'")],
        conditionOperator: 'AND',
      };
      await ruleCacheService.addRule(testUserId, rule1);
      await ruleCacheService.updateRule(testUserId, updatedRule);
      const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol![0]).toEqual({userId: testUserId, rule: rule1}); // Rule should not have been updated
    });
  });
});
