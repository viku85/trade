import {Router} from 'express';
import {container} from 'tsyringe';
import {TradeController} from './trade.controller';

const router = Router();
const controller = container.resolve(TradeController);

router.get('/', (req, res) => controller.getTrades(req, res));

export default router;
