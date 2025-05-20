import {GenericRule} from '../../types/Rule';
import axios from 'axios';

export class ApiRuleEvaluator implements GenericRule<any> {
  id: string;
  description: string;
  type: 'api';
  endpoint: string;
  method: 'GET' | 'POST';
  headers?: Record<string, string>;
  body?: Record<string, any>;
  responseCondition: string;

  constructor(
    id: string,
    description: string,
    endpoint: string,
    method: 'GET' | 'POST',
    responseCondition: string,
    headers?: Record<string, string>,
    body?: Record<string, any>
  ) {
    this.id = id;
    this.description = description;
    this.type = 'api';
    this.endpoint = endpoint;
    this.method = method;
    this.responseCondition = responseCondition;
    this.headers = headers;
    this.body = body;
  }

  async evaluate(context: Record<string, any>): Promise<boolean> {
    try {
      // Build axios config only with non-empty headers/data
      const config: any = {
        url: this.endpoint,
        method: this.method,
      };
      if (this.headers && Object.keys(this.headers).length > 0) {
        config.headers = this.headers;
      }
      if (this.body && Object.keys(this.body).length > 0) {
        config.data = this.body;
      }
      const response = await axios.request(config);
      const conditionReferencesData = this.responseCondition.includes('response.data');
      // If the condition does not reference response.data but response has no data property, throw
      if (!conditionReferencesData && !(response && 'data' in response)) {
        throw new Error(`Unexpected API response format for rule ${this.id}`);
      }
      const arg = conditionReferencesData ? response : response.data;
      try {
        return new Function('response', `return ${this.responseCondition}`)(arg);
      } catch (err) {
        throw new Error(`Error evaluating API rule ${this.id}: ${err}`);
      }
    } catch (error) {
      throw new Error(`Error evaluating API rule ${this.id}: ${error}`);
    }
  }
}
