import 'reflect-metadata';
import {injectable} from 'tsyringe';
import {Request, Response} from 'express';
import {HealthService} from './health.service';

@injectable()
class HealthController {
  constructor(private healthService: HealthService) {}

  async checkHealth(req: Request, res: Response) {
    try {
      const status = await this.healthService.checkHealth();
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({message: 'Internal Server Error'});
    }
  }
}

export {HealthController};
