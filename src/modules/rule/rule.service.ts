import {Rule} from '../../lib/rule-engine/types/Rule';

export class RuleService {
  async createRule(dto: any): Promise<Rule> {
    return {
      id: '1',
      userId: dto.userId,
      description: dto.description,
      type: dto.type,
      conditions: [],
      conditionOperator: 'AND',
    } as any;
  }
  async updateRule(id: string, dto: any): Promise<Rule> {
    return {
      id,
      userId: dto.userId,
      description: dto.description,
      type: dto.type,
      conditions: [],
      conditionOperator: 'AND',
    } as any;
  }
  async deleteRule(id: string): Promise<{id: string; userId: string}> {
    return {id, userId: 'dummyUserId'};
  }
  async getRuleById(id: string): Promise<Rule | null> {
    return {
      id,
      userId: 'dummyUserId',
      description: 'Rule',
      type: 'static',
      conditions: [],
      conditionOperator: 'AND',
    } as any;
  }
  async getAllRules(): Promise<Rule[]> {
    return [];
  }
}
