import {RuleService} from './rule.service';
import {RuleCacheService} from './rule-cache.service';
import {CreateRuleDto, UpdateRuleDto} from './dto/rule.dto';

export class RuleController {
  constructor(
    private readonly ruleService: RuleService,
    private readonly ruleCacheService: RuleCacheService
  ) {}

  async createRule(createRuleDto: CreateRuleDto) {
    const newRule = await this.ruleService.createRule(createRuleDto);
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
}
