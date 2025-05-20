import {Router} from 'express';
import {HealthController} from './health.controller';
import {HealthService} from './health.service';

const router = Router();
const healthController = new HealthController(new HealthService());

router.get('/', (req, res) => healthController.checkHealth(req, res));

export {router as HealthRoute};
export default router;
