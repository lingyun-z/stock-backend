import { Request, Response, NextFunction } from 'express';
import { RESPONSE_CODE } from '../types';

function ping(req: Request, res: Response, next: NextFunction) {
  res.status(RESPONSE_CODE.OK).json('pong');
}

export { ping };
