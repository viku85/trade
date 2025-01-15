import axios from 'axios';

export class ApiRuleEvaluator implements ApiRuleEvaluator {
  id: string;
  description: string;
  type: ApiRuleEvaluator = this;
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
    this.endpoint = endpoint;
    this.method = method;
    this.responseCondition = responseCondition;
    this.headers = headers;
    this.body = body;
  }

  async evaluate(context: Record<string, any>): Promise<boolean> {
    try {
      const response = await axios.request({
        url: this.endpoint,
        method: this.method,
        headers: this.headers || {},
        data: this.body || {},
      });

      // Ensure response.data exists
      const responseData = response.data || {};
      return new Function('response', `return ${this.responseCondition}`)(responseData);
    } catch (error) {
      throw new Error(`Error evaluating API rule ${this.id}: ${error}`);
    }
  }
}
