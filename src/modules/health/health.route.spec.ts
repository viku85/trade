import 'reflect-metadata';
jest.mock('tsyringe', () => ({
  container: {
    resolve: jest.fn(() => ({
      checkHealth: jest.fn((req, res) =>
        res.status(200).json({
          overallStatus: 'healthy',
          dependencies: {database: {status: 'up'}, externalApi: {status: 'up'}},
        })
      ),
    })),
  },
  injectable: () => (target: any) => target,
}));
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
