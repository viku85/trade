import 'reflect-metadata';
jest.mock('tsyringe', () => ({
  container: {
    resolve: jest.fn(() => ({
      getTrades: jest.fn((req, res) => res.status(200).json([[]])),
    })),
  },
  injectable: () => (target: any) => target,
}));
import request from 'supertest';
import express from 'express';
import router from './trade.route';
import TradeService from './trade.service';
import {TradeController} from './trade.controller';

jest.mock('./trade.service');

const mockGetTrades = jest.fn().mockResolvedValue([[]]);
(TradeService as any).mockImplementation(() => ({
  getTrades: mockGetTrades,
}));

describe('Trade Routes', () => {
  const app = express();
  app.use(express.json());
  app.use('/trade', router);

  it('should define the GET /trade route and return 200', async () => {
    const response = await request(app).get('/trade');
    expect(response.status).toBe(200);
    // Optionally check for response body structure
  });
});
