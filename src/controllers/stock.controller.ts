import { Request, Response, NextFunction } from 'express';
import { RESPONSE_CODE } from '../types';
import { getStockNameByID } from '../services';

async function getStockName(req: Request, res: Response, next: NextFunction) {
  try {
    const stockID = req.query.id.toString();
    const name = await getStockNameByID(stockID);
    res.status(RESPONSE_CODE.OK).json({ name });
  } catch (err) {
    res
      .status(RESPONSE_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: err.toString() });
  }
}

export { getStockName };
