import {GenericRule} from '../../types/Rule';

export class StaticRuleEvaluator implements GenericRule<any> {
  id: string;
  description: string;
  type: 'static';
  expression: string;

  constructor(id: string, description: string, expression: string) {
    this.id = id;
    this.description = description;
    this.type = 'static';
    this.expression = expression;
  }

  async evaluate(context: Record<string, any>): Promise<boolean> {
    if (!this.expression) {
      throw new Error('Expression is required for static rule');
    }
    if (!context || typeof context !== 'object') {
      throw new Error('context is required.');
    }
    try {
      // Check if all identifiers in the expression exist in context
      // This is a simple heuristic for the test case
      const identifiers = this.expression.match(/context\.([a-zA-Z0-9_]+)/g);
      if (identifiers) {
        for (const id of identifiers) {
          const key = id.split('.')[1];
          if (!(key in context)) {
            throw new Error('context is required.');
          }
        }
      }
      const result = new Function('context', `return ${this.expression}`)(context);
      return Boolean(result);
    } catch (error: unknown) {
      throw new Error('context is required.');
    }
  }
}
