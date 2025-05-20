import {ApiCondition} from './ApiCondition';
import {StaticCondition} from './StaticCondition';

export interface GenericRule<T> {
  id: string; // Unique identifier for the condition
  description: string; // Human-readable description of the condition
  type: 'static' | 'api'; // Type of the condition: "static" or "api"
  evaluate(context: Record<string, T>): Promise<boolean>; // Evaluate the rule
}

export interface Rule {
  id: string;
  description: string;
  type?: string;
  userId: string;
  conditions: GenericRule<any>[];
  conditionOperator: 'AND' | 'OR';
}

export interface AllRuleResult {
  success: boolean;
  failedRule?: Rule;
}
