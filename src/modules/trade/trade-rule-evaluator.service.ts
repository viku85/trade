import {RuleEngine} from '../../lib/rule-engine/rule-engine'; // Make sure the RuleEngine is imported correctly
import {UserRepository} from '../user/user.repository';
import {ITradeApi} from '../../lib/trade-api/ITradeApi';
import {Rule} from '../../lib/rule-engine/types';
import {RuleCacheService} from '../rule/rule-cache.service';
import TradeService from './trade.service';
import {TradeRepository} from '../../lib/data-access/trade.repository';
import {singleton, injectable} from 'tsyringe';

@injectable()
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
    const relevantRulesAndUsers = this.tradeRuleService.getRulesAndUsersForSymbol(
      marketData.symbol
    );

    if (relevantRulesAndUsers) {
      for (const {userId, rule} of relevantRulesAndUsers) {
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
          // Fix: Use ruleEngine.evaluateAll(context) instead of ruleEngine.evaluate(context)
          const evaluationResult = await this.ruleEngine.evaluateAll(context);

          if (evaluationResult.success) {
            console.log(`Rule evaluated successfully for user ${userId}. Rule ID: ${rule.id}`);
            // Trigger trade using TradeService here.
            // Instead of buy/sell, call purchase/sale on tradeService
            // Safely extract action/quantity if present
            let action: string | undefined = undefined;
            let quantity: number = 0;
            if (rule.conditions && rule.conditions.length > 0) {
              const cond: any = rule.conditions[0];
              action = cond.action;
              quantity = typeof cond.quantity === 'number' ? cond.quantity : 0;
            }
            let tradeResult;
            if (action === 'buy') {
              tradeResult = await this.tradeService.purchase(
                Number(userId),
                marketData.symbol,
                quantity,
                'MARKET'
              );
            } else if (action === 'sell') {
              tradeResult = await this.tradeService.sale(
                Number(userId),
                marketData.symbol,
                quantity,
                'MARKET'
              );
            } else {
              continue;
            }

            if (tradeResult) {
              // Create RulePurchase record here
              // Fix createRulePurchase: userId and ruleId should be numbers
              await this.tradeRepository.createRulePurchase({
                userId: Number(userId),
                ruleId: Number(rule.id),
                purchase: tradeResult,
              });
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
