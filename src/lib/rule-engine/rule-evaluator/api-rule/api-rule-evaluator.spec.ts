--- a/src/lib/rule-engine/rule-evaluator/api-rule/api-rule-evaluator.spec.ts
+++ b/src/lib/rule-engine/rule-evaluator/api-rule/api-rule-evaluator.spec.ts

 import { ApiRuleEvaluator } from './api-rule-evaluator';
 import axios from 'axios';
 jest.mock('axios');
 
 const mockedAxios = axios as jest.Mocked<typeof axios>;
 
 describe('ApiRuleEvaluator', () => {
   beforeEach(() => {
     mockedAxios.request.mockClear();
   });
 
   it('should evaluate an API condition successfully when response matches', async () => {
     const mockResponse = { data: { status: 'OPEN' } };
     mockedAxios.request.mockResolvedValue(mockResponse);
 
     const apiRuleEvaluator = new ApiRuleEvaluator(
       '1',
       'Market is open',
       'https://api.example.com/market-status',
       'GET',
       "response.data.status === 'OPEN'"
     );
 
     const result = await apiRuleEvaluator.evaluate({});
     expect(result).toBe(true);
     expect(mockedAxios.request).toHaveBeenCalledWith({
       url: 'https://api.example.com/market-status',
       method: 'GET',
     });
   });
 
   it('should fail an API condition when response condition is false', async () => {
     const mockResponse = { data: { status: 'CLOSED' } };
     mockedAxios.request.mockResolvedValue(mockResponse);
 
     const apiRuleEvaluator = new ApiRuleEvaluator(
       '2',
       'Market is closed',
       'https://api.example.com/market-status',
       'GET',
       "response.data.status === 'OPEN'"
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
       "response.data.status === 'OPEN'"
     );
 
     await expect(apiRuleEvaluator.evaluate({})).rejects.toThrow(
       'Error evaluating API rule 3: Error: API call failed'
     );
   });

   it('should handle different operators (greater than)', async () => {
     mockedAxios.request.mockResolvedValue({ data: { value: 10 } });
     const apiRuleEvaluator = new ApiRuleEvaluator(
       '4',
       'Value greater than 5',
       'https://api.example.com/data',
       'GET',
       "response.data.value > 5"
     );
     const result = await apiRuleEvaluator.evaluate({});
     expect(result).toBe(true);
   });
 
   it('should handle different operators (less than)', async () => {
     mockedAxios.request.mockResolvedValue({ data: { value: 3 } });
     const apiRuleEvaluator = new ApiRuleEvaluator(
       '5',
       'Value less than 5',
       'https://api.example.com/data',
       'GET',
       "response.data.value < 5"
     );
     const result = await apiRuleEvaluator.evaluate({});
     expect(result).toBe(true);
   });
 
   it('should handle different data types in API response (number)', async () => {
     mockedAxios.request.mockResolvedValue({ data: 10 });
     const apiRuleEvaluator = new ApiRuleEvaluator(
       '6',
       'Response is number 10',
       'https://api.example.com/data',
       'GET',
       "response === 10"
     );
     const result = await apiRuleEvaluator.evaluate({});
     expect(result).toBe(true);
   });
 
   it('should throw an error for unexpected API response format', async () => {
     mockedAxios.request.mockResolvedValue({ invalidData: { value: 10 } });
     const apiRuleEvaluator = new ApiRuleEvaluator(
       '7',
       'Response is number 10',
       'https://api.example.com/data',
       'GET',
       "response === 10"
     );
     await expect(apiRuleEvaluator.evaluate({})).rejects.toThrowError();
   });
 
   it('should handle cases where response has only data', async () => {
    mockedAxios.request.mockResolvedValue({data: "OPEN"});
    const apiRuleEvaluator = new ApiRuleEvaluator('8','Market status is open','https://api.example.com/data','GET',"response === 'OPEN'")
    const result = await apiRuleEvaluator.evaluate({});
    expect(result).toBe(true);
  });
 });

