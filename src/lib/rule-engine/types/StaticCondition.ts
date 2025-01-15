import {Rule} from './Rule';

export interface StaticCondition extends Rule {
  // For static conditions
  expression?: string; // JavaScript-like expression to evaluate the condition (e.g., "price > 100")
}
