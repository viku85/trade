import { RuleEngine } from '../../lib/rule-engine/rule-engine'; // Make sure the RuleEngine is imported correctly
import { UserRepository } from '../user/user.repository';
import { ITradeApi } from 'src/lib/trade-api/ITradeApi';
import { Rule } from '../../lib/rule-engine/types';
import { RuleCacheService } from '../rule/rule-cache.service';
import { TradeService } from './trade.service';
import { TradeRepository } from './trade.repository';

export class TradeRuleEvaluatorService {
    private ruleEngine: RuleEngine;
    private userRepository: UserRepository;
    private tradeApi: ITradeApi;
    private tradeRuleService: RuleCacheService;
    private tradeService: TradeService;
    private tradeRepository: TradeRepository;

    constructor(
        ruleEngine: RuleEngine,
        userRepository: UserRepository,
        tradeApi: ITradeApi,
        tradeRuleService: RuleCacheService,
        tradeService: TradeService,
        tradeRepository: TradeRepository
    ) {
        this.ruleEngine = ruleEngine;
        this.userRepository = userRepository;
        this.tradeApi = tradeApi;
        this.tradeRuleService = tradeRuleService;
        this.tradeService = tradeService;
        this.tradeRepository = tradeRepository;
    }

    async evaluateTradeRulesForUser(marketData: any): Promise<void> {
        const relevantRulesAndUsers = this.tradeRuleService.getRulesAndUsersForSymbol(marketData.symbol);

        if (relevantRulesAndUsers) {
            for (const { userId, rule } of relevantRulesAndUsers) {
                try {
                    // Fetch user's balance from ITradeApi
                    const userBalance = await this.tradeApi.getUserBalance(userId);

                    // Compose the context object by combining market data and user data
                    const context = {
                        market: marketData,
                        user: {
                            id: userId,
                            balance: userBalance,
                        },
                        rule: rule, // Include the current rule in the context
                    };

                    // Evaluate the single rule using ruleEngine.evaluate
                    const evaluationResult = await this.ruleEngine.evaluate(context);

                    if (evaluationResult) {
                        console.log(`Rule evaluated successfully for user ${userId}. Rule ID: ${rule.id}`);
                        // Trigger trade using TradeService here.
                        const { action, quantity } = typeof rule.condition === 'string' ? JSON.parse(rule.condition) : rule.condition;
                        const symbol = marketData.symbol; // Assuming marketData has the symbol
                        
                        let tradeResult;
                        if (action === 'buy') {
                            tradeResult = await this.tradeService.buy({ symbol, quantity });
                        } else if (action === 'sell') {
                            tradeResult = await this.tradeService.sell({ symbol, quantity });
                        } else {
                            console.error(`Unknown trade action: ${action}`);
                            continue; // Skip to next rule if action is invalid
                        }

                        if (tradeResult) {
                            // Create RulePurchase record here
                            await this.tradeRepository.createRulePurchase({ userId: parseInt(userId), ruleId: rule.id, purchase: tradeResult });
                        }
                    } else {
                        console.log(`Rule evaluation failed for user ${userId}. Rule ID: ${rule.id}`);
                    }
                } catch (error) {
                    console.error(`Error processing rule for user ${userId} and rule ${rule.id}:`, error);
                }
            }
        }
    }
}
