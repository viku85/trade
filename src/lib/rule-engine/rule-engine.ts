import {AllRuleResult, Rule, GenericRule} from './types/Rule';

export class RuleEngine {
  private rules: Rule[] = [];

  addRule(rule: Omit<Rule, 'conditions'> & {conditions: GenericRule<any>[]}): void {
    // Best practice: require all conditions to be GenericRule instances
    if (
      !Array.isArray(rule.conditions) ||
      rule.conditions.some(c => typeof c.evaluate !== 'function')
    ) {
      throw new Error(
        'All conditions must be instances of GenericRule with an evaluate(context) method.'
      );
    }
    this.rules.push(rule as Rule);
  }

  async evaluateAll(context: Record<string, any>): Promise<AllRuleResult> {
    for (const rule of this.rules) {
      const conditionResults: boolean[] = [];
      for (const condition of rule.conditions) {
        // Only call .evaluate, never re-instantiate
        const condResult = await condition.evaluate(context);
        conditionResults.push(condResult);
      }
      let result = false;
      if (rule.conditionOperator === 'AND') {
        result = conditionResults.every(Boolean);
      } else {
        result = conditionResults.some(Boolean);
      }
      if (!result) {
        return {success: false, failedRule: rule};
      }
    }
    return {success: true};
  }
}
