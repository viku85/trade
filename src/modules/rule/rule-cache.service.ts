import { UserRepository } from '../user/user.repository';
import { Rule } from '../../lib/rule-engine/types'; // Updated import path

export class RuleCacheService { // Changed class name to RuleCacheService
  private symbolRuleUserMap: Map<string, { userId: string; rule: Rule }[]> = new Map();

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async buildCache(): Promise<void> {
    this.symbolRuleUserMap.clear(); // Clear existing cache

    // Assuming UserRepository has a method to get all users with their rules
    try {
      const usersWithRules = await this.userRepository.getAllUsersWithRules();
      for (const user of usersWithRules) {
        // Ensure user.rules exists and is an array before iterating
        if (user.rules && Array.isArray(user.rules)) {
          for (const rule of user.rules) {
            // Assuming each rule has a 'symbol' property or a way to extract relevant symbols
            // You'll need to adapt this based on your Rule model structure
            const relevantSymbol = this.extractSymbolFromRule(rule);

            if (relevantSymbol) {
              if (!this.symbolRuleUserMap.has(relevantSymbol)) {
                this.symbolRuleUserMap.set(relevantSymbol, []);
              }
              this.symbolRuleUserMap.get(relevantSymbol)?.push({ userId: String(user.id), rule });
            }
          }
        }
          }
    } catch(error){
        console.log(error);
      }
    }


  // Placeholder method to extract symbol from a rule
  // You'll need to implement this based on your Rule model structure
  private extractSymbolFromRule(rule: Rule): string | undefined {
    // Example: Assuming rule.condition is a JSON object and has a 'symbol' field
      try {
          const condition = typeof rule.condition === 'string' ? JSON.parse(rule.condition) : rule.condition;
          if (rule.type === 'static') {
              // Ensure condition and condition.symbol exist
              return condition?.symbol;
          }else{
              // Return undefined or handle other rule types as needed
              return undefined;
        }
    } catch (error) {
      console.error('Error extracting symbol from rule condition:', error);
      return undefined;
    }
  }


  getRulesAndUsersForSymbol(symbol: string): { userId: string; rule: Rule }[] | undefined {
    return this.symbolRuleUserMap.get(symbol);
  }

  getAllSymbolsWithRules(): string[] {
    return Array.from(this.symbolRuleUserMap.keys());
  }

  async addRule(userId: string, rule: Rule): Promise<void> {
    const symbol = this.extractSymbolFromRule(rule);
    if (symbol) {
      if (!this.symbolRuleUserMap.has(symbol)) {
        this.symbolRuleUserMap.set(symbol, []);
      }
      this.symbolRuleUserMap.get(symbol)?.push({ userId, rule });
    }
  }

  async updateRule(userId: string, rule: Rule): Promise<void> {
    const oldSymbol:string|undefined = this.getOldSymbol(userId, rule);
    
    const newSymbol = this.extractSymbolFromRule(rule);

    if (oldSymbol && oldSymbol !== newSymbol) {
      // Remove from old symbol's list
      await this.deleteRule(userId, rule.id)
      // Add to new symbol's list
      await this.addRule(userId, rule);
    } else if(oldSymbol){
      // Update rule in existing list
      const symbol=oldSymbol;
      const rulesForSymbol = this.symbolRuleUserMap.get(symbol);
      if (rulesForSymbol) {
        const ruleIndex = rulesForSymbol.findIndex(item => item.userId === userId && item.rule.id === rule.id);
        if (ruleIndex !== -1) {
          rulesForSymbol[ruleIndex].rule = rule;
        }
      }
    }
  }
  private getOldSymbol(userId:string,rule:Rule):string|undefined {
    for (const [symbol, userRules] of this.symbolRuleUserMap) {
      if (userRules.some(item => item.userId === userId && item.rule.id === rule.id)) {
        return symbol;
      }
    }
    return undefined;
  }

  async deleteRule(userId: string, ruleId: string): Promise<void> {
    for (const [symbol, userRules] of this.symbolRuleUserMap) {
      const ruleIndex = userRules.findIndex(item => item.userId === userId && item.rule.id === ruleId);
      if (ruleIndex !== -1) {
        userRules.splice(ruleIndex, 1);
        if (userRules.length === 0) {
          this.symbolRuleUserMap.delete(symbol);
        }
        break;
      }
    }
  }

  // async updateUserHoldingsInCache(userId: string, holdings: { symbol: string; quantity: number }[]): Promise<void> { ... }
}