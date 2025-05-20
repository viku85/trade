import request from 'supertest';
import express from 'express';
import {HealthRoute} from '../health/health.route';

describe('HealthRoute', () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();
    app.use('/health', HealthRoute);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /health', () => {
    it('should return 200 and health status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('overallStatus');
      expect(response.body).toHaveProperty('dependencies');
    });
  });
});
