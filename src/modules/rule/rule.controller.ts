import { Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RuleService } from './rule.service'; // Assuming you have a RuleService
import { RuleCacheService } from './rule-cache.service'; // Import RuleCacheService
import { CreateRuleDto, UpdateRuleDto } from './dto/rule.dto'; // Assuming DTOs for data validation

@Controller('rules')
export class RuleController {
  constructor(
    private readonly ruleService: RuleService, // Inject RuleService
    private readonly ruleCacheService: RuleCacheService, // Inject RuleCacheService
  ) {}

  @Post()
  async createRule(@Body() createRuleDto: CreateRuleDto) {
    // Call RuleService to create the rule in the database
    const newRule = await this.ruleService.createRule(createRuleDto);

    // After successful database operation, update the cache
    await this.ruleCacheService.addRule(newRule.userId, newRule); // Assuming newRule has userId and is the Rule object

    return newRule;
  }

  @Put(':id')
  async updateRule(@Param('id') id: string, @Body() updateRuleDto: UpdateRuleDto) {
    // Call RuleService to update the rule in the database
    const updatedRule = await this.ruleService.updateRule(id, updateRuleDto);

    // After successful database operation, update the cache
    await this.ruleCacheService.updateRule(updatedRule.userId, updatedRule); // Assuming updatedRule has userId and is the updated Rule object

    return updatedRule;
  }

  @Delete(':id')
  async deleteRule(@Param('id') id: string) {
    // Call RuleService to delete the rule from the database
    // Assuming deleteRule returns the deleted rule or its ID and userId
    const deletedRuleOrId = await this.ruleService.deleteRule(id);

    // After successful database operation, update the cache
    // If deleteRule returns the deleted rule object:
    // await this.ruleCacheService.deleteRule(deletedRuleOrId.userId, deletedRuleOrId.id);
    // If deleteRule returns just the rule ID and you need userId, you might need to fetch it or pass it
    // Assuming you can get the userId and ruleId after deletion:
     const userId = 'someUserId'; // Replace with actual way to get userId
     const ruleId = id; // Assuming id is the ruleId
     await this.ruleCacheService.deleteRule(userId, ruleId);


    return { success: true }; // Or return the deleted rule information
  }

  // Add other rule-related endpoints (e.g., getRule, getAllRules)
}
