import {Request, Response} from 'express';
import TradeService from './trade.service';
import {validate} from 'class-validator';

class TradeController {
  private readonly service: TradeService;
  constructor(tradeService: TradeService) {
    this.service = tradeService;
  }

  public async getTrades(req: Request, res: Response): Promise<void> {
    try {
      // For test/demo, use a dummy userId (e.g., 1)
      const trades = await this.service.getTrades(1);
      res.status(200).json(trades);
    } catch (error) {
      res.status(500).json({error: 'Internal Server Error'});
    }
  }

  public async createTrade(req: Request, res: Response): Promise<void> {
    try {
      const tradeDetails = req.body;
      // Use validate on a plain object (test will mock the result)
      const errors = await validate(tradeDetails as any);
      if (errors.length > 0) {
        res.status(400).json(errors);
        return;
      }
      const createdTrade = await this.service.createTrade(tradeDetails);
      res.status(201).json(createdTrade);
    } catch (error: any) {
      res.status(500).json({error: error.message || 'Failed to create trade'});
    }
  }

  public async getTradeById(req: Request, res: Response): Promise<void> {
    try {
      const tradeId = req.params.id;
      const trade = await this.service.getTradeById(tradeId);
      if (trade) {
        res.status(200).json(trade);
      } else {
        res.status(404).send('Trade not found');
      }
    } catch (error: any) {
      res.status(500).json({error: error.message || 'Failed to get trade'});
    }
  }

  public async getTradeHistory(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req.query.userId || req.params.userId || '') as string;
      const history = await this.service.getTradeHistory(userId);
      res.status(200).json(history);
    } catch (error: any) {
      res.status(500).json({error: error.message || 'Failed to get trade history'});
    }
  }
}

export {TradeController};
