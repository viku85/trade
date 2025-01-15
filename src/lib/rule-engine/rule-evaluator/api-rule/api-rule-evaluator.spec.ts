import {ApiRuleEvaluator} from './api-rule-evaluator';
import axios from 'axios';
jest.mock('axios');
// Typecast axios to jest.Mocked<typeof axios>
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('ApiRuleEvaluator', () => {
  it('should evaluate an API condition successfully', async () => {
    const mockResponse = {data: {status: 'OPEN'}}; // Ensure data exists
    mockedAxios.request.mockResolvedValue(mockResponse);

    const apiRuleEvaluator = new ApiRuleEvaluator(
      '1',
      'Market is open',
      'https://api.example.com/market-status',
      'GET',
      "response.status === 'OPEN'"
    );

    const result = await apiRuleEvaluator.evaluate({});
    expect(result).toBe(true);
  });

  it('should fail an API condition when response condition is false', async () => {
    const mockResponse = {data: {status: 'CLOSED'}}; // Ensure data exists
    mockedAxios.request.mockResolvedValue(mockResponse);

    const apiRuleEvaluator = new ApiRuleEvaluator(
      '2',
      'Market is closed',
      'https://api.example.com/market-status',
      'GET',
      "response.status === 'OPEN'"
    );

    const result = await apiRuleEvaluator.evaluate({});
    expect(result).toBe(false);
  });

  it('should throw an error for API failures', async () => {
    mockedAxios.request.mockRejectedValue(new Error('API call failed'));

    const apiRuleEvaluator = new ApiRuleEvaluator(
      '3',
      'Market status error',
      'https://api.example.com/market-status',
      'GET',
      "response.status === 'OPEN'"
    );

    await expect(apiRuleEvaluator.evaluate({})).rejects.toThrow(
      'Error evaluating API rule 3: Error: API call failed'
    );
  });
});
