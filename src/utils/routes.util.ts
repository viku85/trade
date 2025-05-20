import {Router} from 'express';
import healthRoutes from '../modules/health/health.route';
import tradeRoutes from '../modules/trade/trade.route';
import ruleRoutes from '../modules/rule/rule.route';

export function registerRoutes(app: import('express').Express) {
  app.use('/api/health', healthRoutes);
  app.use('/api/trade', tradeRoutes);
  app.use('/api/rules', ruleRoutes);
  app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the Serverless Trading API'});
  });
}
