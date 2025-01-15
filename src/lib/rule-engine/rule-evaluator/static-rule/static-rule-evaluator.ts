import {StaticCondition as StaticRule} from '../../types/StaticCondition';

export class StaticRuleEvaluator implements StaticRule {
  id: string;
  description: string;
  expression: string;
  type: StaticRule = this;

  constructor(id: string, description: string, expression: string) {
    this.id = id;
    this.description = description;
    this.expression = expression;
  }

  async evaluate(context: Record<string, any>): Promise<boolean> {
    if (!this.expression) {
      throw new Error(`Expression is required for static rule`);
    }
    if (!context) {
      throw new Error(`Context is required for static rule`);
    }

    try {
      const result = new Function('context', `return ${this.expression}`)(context);
      return Boolean(result);
    } catch (error: unknown) {
      throw new Error(`Error evaluating static rule`);
    }
  }
}
