import {RuleEngine} from './rule-engine';
import {StaticRuleEvaluator} from './rule-evaluator/static-rule/static-rule-evaluator';
import {ApiRuleEvaluator} from './rule-evaluator/api-rule/api-rule-evaluator';
import axios from 'axios';
import {AllRuleResult} from './types/Rule';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('RuleEngine', () => {
  let ruleEngine: RuleEngine;

  beforeEach(() => {
    ruleEngine = new RuleEngine();
  });

  it('should evaluate a rule with a single static condition that evaluates to true', async () => {
    const staticCondition = new StaticRuleEvaluator('1', 'Test', '1 === 1');
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule1',
      description: 'Rule 1',
      userId: 'user1',
      conditions: [staticCondition],
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with a single static condition that evaluates to false', async () => {
    const staticCondition = new StaticRuleEvaluator('2', 'Test', '1 === 2');
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule2',
      description: 'Rule 2',
      userId: 'user1',
      conditions: [staticCondition],
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(false);
  });

  it('should evaluate a rule with multiple static conditions (AND - all true)', async () => {
    const staticConditions = [
      new StaticRuleEvaluator('3', 'Test', '1 === 1'),
      new StaticRuleEvaluator('4', 'Test', '2 === 2'),
    ];
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule3',
      description: 'Rule 3',
      userId: 'user1',
      conditions: staticConditions,
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with multiple static conditions (AND - one false)', async () => {
    const staticConditions = [
      new StaticRuleEvaluator('5', 'Test', '1 === 1'),
      new StaticRuleEvaluator('6', 'Test', '2 === 3'),
    ];
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule4',
      description: 'Rule 4',
      userId: 'user1',
      conditions: staticConditions,
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(false);
  });

  it('should evaluate a rule with multiple static conditions (OR - one true)', async () => {
    const staticConditions = [
      new StaticRuleEvaluator('7', 'Test', '1 === 2'),
      new StaticRuleEvaluator('8', 'Test', '2 === 2'),
    ];
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule5',
      description: 'Rule 5',
      userId: 'user1',
      conditions: staticConditions,
      conditionOperator: 'OR',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with multiple static conditions (OR - all false)', async () => {
    const staticConditions = [
      new StaticRuleEvaluator('9', 'Test', '1 === 2'),
      new StaticRuleEvaluator('10', 'Test', '2 === 3'),
    ];
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule6',
      description: 'Rule 6',
      userId: 'user1',
      conditions: staticConditions,
      conditionOperator: 'OR',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(false);
  });

  it('should evaluate a rule with a single API condition', async () => {
    const mockResponse: any = {
      data: {value: 10},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {url: 'http://api.example.com', headers: {}},
    };
    mockedAxios.request.mockResolvedValue(mockResponse);
    const apiCondition = new ApiRuleEvaluator(
      '11',
      'API Test',
      'http://api.example.com',
      'GET',
      'response.data.value > 5'
    );

    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule7',
      description: 'Rule 7',
      userId: 'user1',
      conditions: [apiCondition],
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with multiple API conditions (AND)', async () => {
    mockedAxios.request
      .mockResolvedValueOnce({
        data: {value: 10},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {url: 'http://api.example.com/1', headers: {}},
      })
      .mockResolvedValueOnce({
        data: {value: 20},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {url: 'http://api.example.com/2', headers: {}},
      });
    const apiConditions = [
      new ApiRuleEvaluator(
        '12',
        'API Test 1',
        'http://api.example.com/1',
        'GET',
        'response.data.value > 5'
      ),
      new ApiRuleEvaluator(
        '13',
        'API Test 2',
        'http://api.example.com/2',
        'GET',
        'response.data.value > 15'
      ),
    ];
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule8',
      description: 'Rule 8',
      userId: 'user1',
      conditions: apiConditions,
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with multiple API conditions (OR)', async () => {
    mockedAxios.request
      .mockResolvedValueOnce({
        data: {value: 10},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {url: 'http://api.example.com/1', headers: {}},
      })
      .mockResolvedValueOnce({
        data: {value: 2},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {url: 'http://api.example.com/2', headers: {}},
      });
    const apiConditions = [
      new ApiRuleEvaluator(
        '14',
        'API Test 1',
        'http://api.example.com/1',
        'GET',
        'response.data.value > 5'
      ),
      new ApiRuleEvaluator(
        '15',
        'API Test 2',
        'http://api.example.com/2',
        'GET',
        'response.data.value > 15'
      ),
    ];
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule9',
      description: 'Rule 9',
      userId: 'user1',
      conditions: apiConditions,
      conditionOperator: 'OR',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with a mix of static and API conditions', async () => {
    mockedAxios.request.mockResolvedValue({
      data: {value: 10},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {url: 'http://api.example.com', headers: {}},
    });
    const conditions = [
      new ApiRuleEvaluator(
        '16',
        'API Test',
        'http://api.example.com',
        'GET',
        'response.data.value > 5'
      ),
      new StaticRuleEvaluator('17', 'Static Test', '2 === 2'),
    ];
    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule10',
      description: 'Rule 10',
      userId: 'user1',
      conditions: conditions,
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    const result: AllRuleResult = await ruleEngine.evaluateAll({});
    expect(result.success).toBe(true);
  });

  it('should handle errors during API condition evaluation', async () => {
    mockedAxios.request.mockRejectedValue(new Error('API call failed'));
    const apiCondition = new ApiRuleEvaluator(
      '18',
      'API Test',
      'http://api.example.com',
      'GET',
      'response.data.value > 5'
    );

    const rule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule11',
      description: 'Rule 11',
      userId: 'user1',
      conditions: [apiCondition],
      conditionOperator: 'AND',
    };
    ruleEngine.addRule(rule);
    await expect(ruleEngine.evaluateAll({})).rejects.toThrow('Error evaluating API rule');
  });

  it('should evaluate a rule with nested conditions (using AND and OR)', async () => {
    mockedAxios.request.mockResolvedValue({
      data: {value: 10},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {url: 'http://api.example.com', headers: {}},
    });

    const staticCondition1 = new StaticRuleEvaluator('19', 'Static Test 1', '2 === 2');
    const apiCondition1 = new ApiRuleEvaluator(
      '20',
      'API Test 1',
      'http://api.example.com',
      'GET',
      'response.data.value > 5'
    );

    const staticCondition2 = new StaticRuleEvaluator('21', 'Static Test 2', '1 === 2');

    const conditions = [staticCondition1, apiCondition1, staticCondition2];

    const orRule: Parameters<RuleEngine['addRule']>[0] = {
      id: 'rule13',
      description: 'Rule 13 (OR)',
      userId: 'user1',
      conditions: conditions,
      conditionOperator: 'OR',
    };

    const result: AllRuleResult = await ruleEngine.evaluateAll(orRule);

    expect(result.success).toBe(true);
  });
});
