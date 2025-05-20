import {Router} from 'express';
import {ITradeApi} from '../../lib/trade-api/ITradeApi';
import {TradeController} from './trade.controller';
import TradeService from './trade.service';

const router = Router();
// Provide a dummy/mock ITradeApi for the service
const dummyTradeApi: ITradeApi = {
  placeOrder: async () => ({}),
  getTrades: async () => [],
  cancelOrder: async () => ({}),
  getOrderStatus: async () => ({}),
  getUserBalance: async () => 0,
};
const tradeService = new TradeService(dummyTradeApi);
const controller = new TradeController(tradeService);

router.get('/', (req, res) => controller.getTrades(req, res));

export default router;
