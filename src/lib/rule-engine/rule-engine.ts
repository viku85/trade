import {Rule} from './types/Rule';

export class RuleEngine {
  private readonly rules: Rule[] = [];

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }
  async evaluateAll(context: Record<string, any>): Promise<{success: boolean; failedRule?: Rule}> {
    for (const rule of this.rules) {
      const isValid = await rule.evaluate(context);
      if (!isValid) {
        return {success: false, failedRule: rule};
      }
    }
    return {success: true};
  }
}
