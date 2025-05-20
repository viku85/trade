export interface StaticCondition {
  conditionId: string;
  description: string;
  expression: string;
}

export interface ApiCondition {
  conditionId: string;
  description: string;
  url: string;
  method: string;
  expression: string;
}

export type Condition = StaticCondition | ApiCondition;

export interface Rule {
  id: string;
  description: string;
  conditions: Condition[];
  conditionOperator: 'AND' | 'OR';
  userId: string;
}

export interface RuleEngine {
  evaluate(rule: Rule, context: any): Promise<boolean>;
}
