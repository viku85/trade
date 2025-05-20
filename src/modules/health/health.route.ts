import {Router} from 'express';
import {container} from 'tsyringe';
import {HealthController} from './health.controller';

const router = Router();
const healthController = container.resolve(HealthController);

router.get('/', (req, res) => healthController.checkHealth(req, res));

export {router as HealthRoute};
export default router;
