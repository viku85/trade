import {ApiRuleEvaluator} from './rule-evaluator/api-rule/api-rule-evaluator';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ApiRule', () => {
  it('should evaluate an API condition successfully', async () => {
    const mockResponse = {status: 'OPEN'};
    mockedAxios.request.mockResolvedValue({data: mockResponse});

    const apiRule = new ApiRuleEvaluator(
      '1',
      'Market is open',
      'https://api.example.com/market-status',
      'GET',
      "response.status === 'OPEN'"
    );

    const result = await apiRule.evaluate({});
    expect(result).toBe(true);
  });

  it('should fail an API condition when response condition is false', async () => {
    const mockResponse = {status: 'CLOSED'};
    mockedAxios.request.mockResolvedValue({data: mockResponse});

    const apiRule = new ApiRuleEvaluator(
      '2',
      'Market is closed',
      'https://api.example.com/market-status',
      'GET',
      "response.status === 'OPEN'"
    );

    const result = await apiRule.evaluate({});
    expect(result).toBe(false);
  });

  it('should throw an error for API failures', async () => {
    mockedAxios.request.mockRejectedValue(new Error('API call failed'));

    const apiRule = new ApiRuleEvaluator(
      '3',
      'Market status error',
      'https://api.example.com/market-status',
      'GET',
      "response.status === 'OPEN'"
    );

    await expect(apiRule.evaluate({})).rejects.toThrow('Error evaluating API rule');
  });
});
