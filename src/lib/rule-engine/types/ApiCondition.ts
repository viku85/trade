import {Rule} from './Rule';

export interface ApiCondition extends Rule {
  // For API-dependent conditions
  endpoint?: string; // API endpoint to fetch data
  method?: 'GET' | 'POST'; // HTTP method for the API call
  headers?: Record<string, string>; // Headers for the API request
  body?: Record<string, any>; // Body for POST API requests
  responseCondition?: string; // JavaScript-like expression to evaluate the API response (e.g., "response.status === 'SUCCESS'")
}
