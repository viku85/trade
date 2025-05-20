import {injectable} from 'tsyringe';
import {RuleService} from './rule.service';
import {RuleCacheService} from './rule-cache.service';
import {CreateRuleDto, UpdateRuleDto} from './dto/rule.dto';
import {Condition} from '../../lib/rule-engine/types';

@injectable()
export class RuleController {
  constructor(
    private readonly ruleService: RuleService,
    private readonly ruleCacheService: RuleCacheService
  ) {}

  async createRule(createRuleDto: CreateRuleDto) {
    // Map DTO to Rule shape, provide defaults for missing fields
    const ruleToCreate = {
      ...createRuleDto,
      conditions: [], // Default empty array, or map from DTO if available
      conditionOperator: 'AND' as const, // Default, or map from DTO if available
    };
    const newRule = await this.ruleService.createRule(ruleToCreate);
    await this.ruleCacheService.addRule(newRule.userId, newRule);
    return newRule;
  }

  async updateRule(id: string, updateRuleDto: UpdateRuleDto) {
    const updatedRule = await this.ruleService.updateRule(id, updateRuleDto);
    await this.ruleCacheService.updateRule(updatedRule.userId, updatedRule);
    return updatedRule;
  }

  async deleteRule(id: string) {
    const deletedRuleOrId = await this.ruleService.deleteRule(id);
    const userId = deletedRuleOrId.userId;
    const ruleId = id;
    await this.ruleCacheService.deleteRule(userId, ruleId);
    return {success: true};
  }

  async getAllRules() {
    return this.ruleService.getAllRules();
  }

  async getRuleById(id: string) {
    return this.ruleService.getRuleById(id);
  }

  async getRulesByUser(userId: string) {
    return this.ruleService.getRulesByUser(userId);
  }
}
