import {RuleEngine} from './rule-engine';
import {StaticCondition, ApiCondition, Rule, Condition} from './types';
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
    const staticCondition: StaticCondition = {
      conditionId: '1',
      description: 'Test',
      expression: '1 === 1',
    };
    const rule: Rule = {
      id: 'rule1',
      description: 'Rule 1',
      conditions: [staticCondition],
      conditionOperator: 'AND',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with a single static condition that evaluates to false', async () => {
    const staticCondition: StaticCondition = {
      conditionId: '2',
      description: 'Test',
      expression: '1 === 2',
    };
    const rule: Rule = {
      id: 'rule2',
      description: 'Rule 2',
      conditions: [staticCondition],
      conditionOperator: 'AND',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
    expect(result.success).toBe(false);
  });

  it('should evaluate a rule with multiple static conditions (AND - all true)', async () => {
    const staticConditions: StaticCondition[] = [
      {conditionId: '3', description: 'Test', expression: '1 === 1'},
      {conditionId: '4', description: 'Test', expression: '2 === 2'},
    ];
    const rule: Rule = {
      id: 'rule3',
      description: 'Rule 3',
      conditions: staticConditions,
      conditionOperator: 'AND',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with multiple static conditions (AND - one false)', async () => {
    const staticConditions: StaticCondition[] = [
      {conditionId: '5', description: 'Test', expression: '1 === 1'},
      {conditionId: '6', description: 'Test', expression: '2 === 3'},
    ];
    const rule: Rule = {
      id: 'rule4',
      description: 'Rule 4',
      conditions: staticConditions,
      conditionOperator: 'AND',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
    expect(result.success).toBe(false);
  });

  it('should evaluate a rule with multiple static conditions (OR - one true)', async () => {
    const staticConditions: StaticCondition[] = [
      {conditionId: '7', description: 'Test', expression: '1 === 2'},
      {conditionId: '8', description: 'Test', expression: '2 === 2'},
    ];
    const rule: Rule = {
      id: 'rule5',
      description: 'Rule 5',
      conditions: staticConditions,
      conditionOperator: 'OR',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
    expect(result.success).toBe(true);
  });

  it('should evaluate a rule with multiple static conditions (OR - all false)', async () => {
    const staticConditions: StaticCondition[] = [
      {conditionId: '9', description: 'Test', expression: '1 === 2'},
      {conditionId: '10', description: 'Test', expression: '2 === 3'},
    ];
    const rule: Rule = {
      id: 'rule6',
      description: 'Rule 6',
      conditions: staticConditions,
      conditionOperator: 'OR',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
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
    const apiCondition: ApiCondition = {
      conditionId: '11',
      description: 'API Test',
      url: 'http://api.example.example.com',
      method: 'GET',
      expression: 'response.data.value > 5',
    };

    const rule: Rule = {
      id: 'rule7',
      description: 'Rule 7',
      conditions: [apiCondition],
      conditionOperator: 'AND',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
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
    const apiConditions: ApiCondition[] = [
      {
        conditionId: '12',
        description: 'API Test 1',
        url: 'http://api.example.com/1',
        method: 'GET',
        expression: 'response.data.value > 5',
      },
      {
        conditionId: '13',
        description: 'API Test 2',
        url: 'http://api.example.com/2',
        method: 'GET',
        expression: 'response.data.value > 15',
      },
    ];
    const rule: Rule = {
      id: 'rule8',
      description: 'Rule 8',
      conditions: apiConditions,
      conditionOperator: 'AND',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
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
    const apiConditions: ApiCondition[] = [
      {
        conditionId: '14',
        description: 'API Test 1',
        url: 'http://api.example.com/1',
        method: 'GET',
        expression: 'response.data.value > 5',
      },
      {
        conditionId: '15',
        description: 'API Test 2',
        url: 'http://api.example.com/2',
        method: 'GET',
        expression: 'response.data.value > 15',
      },
    ];
    const rule: Rule = {
      id: 'rule9',
      description: 'Rule 9',
      conditions: apiConditions,
      conditionOperator: 'OR',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
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
    const conditions: Condition[] = [
      {
        conditionId: '16',
        description: 'API Test',
        url: 'http://api.example.com',
        method: 'GET',
        expression: 'response.data.value > 5',
      },
      {conditionId: '17', description: 'Static Test', expression: '2 === 2'},
    ];
    const rule: Rule = {
      id: 'rule10',
      description: 'Rule 10',
      conditions: conditions,
      conditionOperator: 'AND',
    };
    const result: AllRuleResult = await ruleEngine.evaluateAll(rule);
    expect(result.success).toBe(true);
  });

  it('should handle errors during API condition evaluation', async () => {
    mockedAxios.request.mockRejectedValue(new Error('API call failed'));
    const apiCondition: ApiCondition = {
      conditionId: '18',
      description: 'API Test',
      url: 'http://api.example.com',
      method: 'GET',
      expression: 'response.data.value > 5',
    };

    const rule: Rule = {
      id: 'rule11',
      description: 'Rule 11',
      conditions: [apiCondition],
      conditionOperator: 'AND',
    };
    await expect(ruleEngine.evaluateAll(rule)).rejects.toThrow('Error evaluating API rule');
  });

  it('should evaluate a rule with nested conditions (using AND and OR)', async () => {
    mockedAxios.request.mockResolvedValue({
      data: {value: 10},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {url: 'http://api.example.com', headers: {}},
    });

    const staticCondition1: StaticCondition = {
      conditionId: '19',
      description: 'Static Test 1',
      expression: '2 === 2',
    };
    const apiCondition1: ApiCondition = {
      conditionId: '20',
      description: 'API Test 1',
      url: 'http://api.example.com',
      method: 'GET',
      expression: 'response.data.value > 5',
    };

    const staticCondition2: StaticCondition = {
      conditionId: '21',
      description: 'Static Test 2',
      expression: '1 === 2',
    };

    const conditions: Condition[] = [staticCondition1, apiCondition1, staticCondition2];

    const orRule: Rule = {
      id: 'rule13',
      description: 'Rule 13 (OR)',
      conditions: conditions,
      conditionOperator: 'OR',
    };

    const result: AllRuleResult = await ruleEngine.evaluateAll(orRule);

    expect(result.success).toBe(true);
  });
});
