import 'reflect-metadata';
import {RuleController} from './rule.controller';
import {RuleService} from './rule.service';
import {RuleCacheService} from './rule-cache.service';
import {CreateRuleDto, UpdateRuleDto} from './dto/rule.dto';

describe('RuleController', () => {
  let ruleController: RuleController;
  let mockRuleService: any;
  let mockRuleCacheService: any;

  beforeEach(() => {
    mockRuleService = {
      createRule: jest.fn(),
      updateRule: jest.fn(),
      deleteRule: jest.fn(),
    };
    mockRuleCacheService = {
      addRule: jest.fn(),
      updateRule: jest.fn(),
      deleteRule: jest.fn(),
    };
    ruleController = new RuleController(mockRuleService, mockRuleCacheService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a rule and update the cache', async () => {
    const dto: CreateRuleDto = {description: 'desc', type: 'static', userId: 'u1'};
    const ruleToCreate = {
      ...dto,
      conditions: [],
      conditionOperator: 'AND',
    };
    const createdRule = {
      id: '1',
      description: 'desc',
      type: 'static',
      userId: 'u1',
      conditions: [],
      conditionOperator: 'AND',
      evaluate: jest.fn(),
    };
    mockRuleService.createRule.mockResolvedValue(createdRule);
    mockRuleCacheService.addRule.mockResolvedValue(undefined);
    const result = await ruleController.createRule(dto);
    expect(mockRuleService.createRule).toHaveBeenCalledWith(ruleToCreate);
    expect(mockRuleCacheService.addRule).toHaveBeenCalledWith('u1', createdRule);
    expect(result).toBe(createdRule);
  });

  it('should update a rule and update the cache', async () => {
    const id = '1';
    const dto: UpdateRuleDto = {description: 'updated', type: 'static', userId: 'u1'};
    const updatedRule = {
      id,
      description: 'updated',
      type: 'static',
      userId: 'u1',
      evaluate: jest.fn(),
    };
    mockRuleService.updateRule.mockResolvedValue(updatedRule);
    mockRuleCacheService.updateRule.mockResolvedValue(undefined);
    const result = await ruleController.updateRule(id, dto);
    expect(mockRuleService.updateRule).toHaveBeenCalledWith(id, dto);
    expect(mockRuleCacheService.updateRule).toHaveBeenCalledWith('u1', updatedRule);
    expect(result).toBe(updatedRule);
  });

  it('should delete a rule and update the cache', async () => {
    const id = '1';
    const userId = 'u1';
    mockRuleService.deleteRule.mockResolvedValue({id, userId});
    mockRuleCacheService.deleteRule.mockResolvedValue(undefined);
    const result = await ruleController.deleteRule(id);
    expect(mockRuleService.deleteRule).toHaveBeenCalledWith(id);
    expect(mockRuleCacheService.deleteRule).toHaveBeenCalledWith(userId, id);
    expect(result).toEqual({success: true});
  });
});
