import { Router } from 'express';
import { ping } from '../controllers';
import stockRouter from './stock.router';

const router: Router = Router();
router.use('/ping', ping);
router.use('/stock', stockRouter);

export default router;
