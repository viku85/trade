import {ApiCondition} from './ApiCondition';
import {StaticCondition} from './StaticCondition';

export interface GenericRule<T> {
  id: string; // Unique identifier for the condition
  description: string; // Human-readable description of the condition
  type: StaticCondition | ApiCondition; // Type of the condition: "static" or "api"
  evaluate(context: Record<string, T>): Promise<boolean>; // Evaluate the rule
}

export interface Rule extends GenericRule<any> {}
