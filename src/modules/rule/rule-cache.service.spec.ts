import { RuleCacheService } from './rule-cache.service';
import { Rule } from '../../lib/rule-engine/types/Rule';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';

const mockUserRepository = {
    getAllUsersWithRules: jest.fn(),
} as unknown as UserRepository

describe('RuleCacheService', () => {
    let ruleCacheService: RuleCacheService;
    const testUserId = 'test-user-id';

    beforeEach(() => {
      ruleCacheService = new RuleCacheService(mockUserRepository);
      // Clear the cache before each test by creating a new one
      (ruleCacheService as any).symbolRuleUserMap = new Map<string, { userId: string; rule: Rule }[]>();
      mockUserRepository.getAllUsersWithRules.mockResolvedValue([]); // Default to no users
    });
  
    it('should be defined', () => {
        expect(ruleCacheService).toBeDefined();
    });

    describe('addRule', () => {
        it('should add a new rule to the cache', async () => {
            const rule: Rule = {
                id: 'rule1',
        type: 'static',
        condition: { symbol: 'AAPL' },
        description: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
            const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            expect(rulesForSymbol).toHaveLength(1);
            expect(rulesForSymbol[0].rule).toEqual(rule);
            expect(rulesForSymbol[0].userId).toEqual(testUserId);
        });

        it('should add multiple rules for the same symbol', async () => {
            const rule1: Rule = {
                id: 'rule1',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const rule2: Rule = {
                id: 'rule2',
        type: 'static',
                condition:{symbol: 'AAPL'},
                description: 'Test Rule 2',
            };
            await ruleCacheService.addRule(testUserId, rule1);
            await ruleCacheService.addRule(testUserId, rule2);
            const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            expect(rulesForSymbol).toHaveLength(2);
            expect(rulesForSymbol).toEqual([
                { userId: testUserId, rule: rule1 },
                { userId: testUserId, rule: rule2 },
            ]);
        });

        it('should add rules for different symbols', async () => {
            const rule1: Rule = {
                id: 'rule1',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const rule2: Rule = {
                id: 'rule2',
                type: 'static',
                condition: { symbol: 'GOOG' },
                description: 'Test Rule 2',
            };
            await ruleCacheService.addRule(testUserId, rule1);
            await ruleCacheService.addRule(testUserId, rule2);

            const rulesForAAPL = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            const rulesForGOOG = ruleCacheService.getRulesAndUsersForSymbol('GOOG');
            expect(rulesForAAPL).toHaveLength(1);
            expect(rulesForAAPL[0]).toEqual({ userId: testUserId, rule: rule1 });
            expect(rulesForGOOG).toHaveLength(1);
            expect(rulesForGOOG[0]).toEqual({ userId: testUserId, rule: rule2 });
        });
    });

    describe('getRulesAndUsersForSymbol', () => {
        it('should return rules for a specific symbol', async () => {
            const rule1: Rule = {
                id: 'rule1',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const rule2: Rule = {
                id: 'rule2',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 2',
            };
            await ruleCacheService.addRule(testUserId, rule1);
            await ruleCacheService.addRule(testUserId, rule2);
            const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            expect(rulesForSymbol).toEqual([
                { userId: testUserId, rule: rule1 },
                { userId: testUserId, rule: rule2 },
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
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const rule2: Rule = {
                id: 'rule2',
                type: 'static',
                condition: { symbol: 'GOOG' },
                description: 'Test Rule 2',
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
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const rule2: Rule = {
                id: 'rule2',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 2',
            };
            await ruleCacheService.addRule(testUserId, rule1);
            await ruleCacheService.addRule(testUserId, rule2);

            await ruleCacheService.deleteRule(testUserId, 'rule1');
            const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            expect(rulesForSymbol).toHaveLength(1);
            expect(rulesForSymbol).not.toContainEqual({ userId: testUserId, rule: rule1 });
            expect(rulesForSymbol).toContainEqual({ userId: testUserId, rule: rule2 });
        });

        it('should do nothing if the rule ID does not exist', async () => {
            const rule1: Rule = {
                id: 'rule1',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            await ruleCacheService.addRule(testUserId, rule1);

            await ruleCacheService.deleteRule(testUserId, 'nonexistent-rule');
            const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            expect(rulesForSymbol).toHaveLength(1);
            expect(rulesForSymbol).toContainEqual({ userId: testUserId, rule: rule1 });
        });

        it('should remove the symbol entry if the last rule for a symbol is deleted', async () => {
            const rule1: Rule = {
                id: 'rule1',
                type: 'static',
                condition:{symbol: 'AAPL'},
                description: 'Test Rule 1',
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
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const updatedRule: Rule = {
                id: 'rule1',
                type: 'static',
                condition:{symbol: 'AAPL'},
                description: 'Updated Test Rule 1',
            };
            await ruleCacheService.addRule(testUserId, rule1);
            await ruleCacheService.updateRule(testUserId, updatedRule);
            const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            expect(rulesForSymbol).toHaveLength(1);
            expect(rulesForSymbol[0]).toEqual({ userId: testUserId, rule: updatedRule });
        });

        it('should update a rule when its symbol changes', async () => {
            const rule1: Rule = {
                id: 'rule1',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const updatedRule: Rule = {
                id: 'rule1',
                type: 'static',
                condition:{symbol: 'MSFT'},
                description: 'Updated Test Rule 1',
            };
            await ruleCacheService.addRule(testUserId, rule1);
            await ruleCacheService.updateRule(testUserId, updatedRule);

            const rulesForAAPL = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            const rulesForMSFT = ruleCacheService.getRulesAndUsersForSymbol('MSFT');

            expect(rulesForAAPL).toBeUndefined();
            expect(rulesForMSFT).toHaveLength(1);
            expect(rulesForMSFT[0]).toEqual({ userId: testUserId, rule: updatedRule });
            expect((ruleCacheService as any).symbolRuleUserMap.has('AAPL')).toBe(false);
        });


        it('should do nothing if the rule ID to update does not exist', async () => {
            const rule1: Rule = {
                id: 'rule1',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Test Rule 1',
            };
            const updatedRule: Rule = {
                id: 'nonexistent-rule',
                type: 'static',
                condition: { symbol: 'AAPL' },
                description: 'Updated Test Rule',
            };
            await ruleCacheService.addRule(testUserId, rule1);
            await ruleCacheService.updateRule(testUserId, updatedRule);
            const rulesForSymbol = ruleCacheService.getRulesAndUsersForSymbol('AAPL');
            expect(rulesForSymbol).toHaveLength(1);
            expect(rulesForSymbol[0]).toEqual({ userId: testUserId, rule: rule1 }); // Rule should not have been updated
        });
    });
});
    });

    it('should add rules for different symbols', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      const rule2: Rule = {
        id: 'rule2',
        name: 'Test Rule 2',
        symbol: 'GOOG',
        conditions: [],
        action: { type: 'SELL', parameters: {} },
        isActive: true,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.setRule(rule2);
      const rulesForAAPL = ruleCacheService.getRulesBySymbol('AAPL');
      const rulesForGOOG = ruleCacheService.getRulesBySymbol('GOOG');
      expect(rulesForAAPL).toHaveLength(1);
      expect(rulesForAAPL[0]).toEqual(rule1);
      expect(rulesForGOOG).toHaveLength(1);
      expect(rulesForGOOG[0]).toEqual(rule2);
    });
  });

  describe('getRulesBySymbol', () => {
    it('should return rules for a specific symbol', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      const rule2: Rule = {
        id: 'rule2',
        name: 'Test Rule 2',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'SELL', parameters: {} },
        isActive: true,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.setRule(rule2);
      const rulesForSymbol = ruleCacheService.getRulesBySymbol('AAPL');
      expect(rulesForSymbol).toEqual([rule1, rule2]);
    });

    it('should return an empty array if no rules exist for the symbol', () => {
      const rulesForSymbol = ruleCacheService.getRulesBySymbol('NONEXISTENT');
      expect(rulesForSymbol).toEqual([]);
    });
  });

  describe('getAllRules', () => {
    it('should return all rules from the cache', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      const rule2: Rule = {
        id: 'rule2',
        name: 'Test Rule 2',
        symbol: 'GOOG',
        conditions: [],
        action: { type: 'SELL', parameters: {} },
        isActive: true,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.setRule(rule2);
      const allRules = ruleCacheService.getAllRules();
      // Order might not be guaranteed in a Map, so check for presence
      expect(allRules).toHaveLength(2);
      expect(allRules).toContainEqual(rule1);
      expect(allRules).toContainEqual(rule2);
    });

    it('should return an empty array if the cache is empty', () => {
      const allRules = ruleCacheService.getAllRules();
      expect(allRules).toEqual([]);
    });
  });

  describe('deleteRule', () => {
    it('should delete a rule from the cache by ID', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      const rule2: Rule = {
        id: 'rule2',
        name: 'Test Rule 2',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'SELL', parameters: {} },
        isActive: true,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.setRule(rule2);

      ruleCacheService.deleteRule('rule1');
      const rulesForSymbol = ruleCacheService.getRulesBySymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol).not.toContainEqual(rule1);
      expect(rulesForSymbol).toContainEqual(rule2);
    });

    it('should do nothing if the rule ID does not exist', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      ruleCacheService.setRule(rule1);

      ruleCacheService.deleteRule('nonexistent-rule');
      const rulesForSymbol = ruleCacheService.getRulesBySymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol).toContainEqual(rule1);
    });

    it('should remove the symbol entry if the last rule for a symbol is deleted', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.deleteRule('rule1');
      const rulesForSymbol = ruleCacheService.getRulesBySymbol('AAPL');
      expect(rulesForSymbol).toEqual([]);
      expect((ruleCacheService as any).rules.has('AAPL')).toBe(false);
    });
  });

  describe('updateRule', () => {
    it('should update an existing rule in the cache', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      const updatedRule: Rule = {
        id: 'rule1',
        name: 'Updated Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'SELL', parameters: {} },
        isActive: false,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.updateRule(updatedRule);
      const rulesForSymbol = ruleCacheService.getRulesBySymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol[0]).toEqual(updatedRule);
    });

    it('should update a rule when its symbol changes', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      const updatedRule: Rule = {
        id: 'rule1',
        name: 'Updated Test Rule 1',
        symbol: 'MSFT', // Symbol changed
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.updateRule(updatedRule);

      const rulesForAAPL = ruleCacheService.getRulesBySymbol('AAPL');
      const rulesForMSFT = ruleCacheService.getRulesBySymbol('MSFT');

      expect(rulesForAAPL).toEqual([]);
      expect(rulesForMSFT).toHaveLength(1);
      expect(rulesForMSFT[0]).toEqual(updatedRule);
      expect((ruleCacheService as any).rules.has('AAPL')).toBe(false);
    });


    it('should do nothing if the rule ID to update does not exist', () => {
      const rule1: Rule = {
        id: 'rule1',
        name: 'Test Rule 1',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'BUY', parameters: {} },
        isActive: true,
      };
      const updatedRule: Rule = {
        id: 'nonexistent-rule',
        name: 'Updated Test Rule',
        symbol: 'AAPL',
        conditions: [],
        action: { type: 'SELL', parameters: {} },
        isActive: false,
      };
      ruleCacheService.setRule(rule1);
      ruleCacheService.updateRule(updatedRule);
      const rulesForSymbol = ruleCacheService.getRulesBySymbol('AAPL');
      expect(rulesForSymbol).toHaveLength(1);
      expect(rulesForSymbol[0]).toEqual(rule1); // Rule should not have been updated
    });
  });
});