import { Router } from 'express';
import { getStockName } from '../controllers';

const router: Router = Router();
router.get('/getName', getStockName);

export default router;
