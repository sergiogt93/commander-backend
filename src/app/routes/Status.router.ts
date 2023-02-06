import { Router, Request, Response } from 'express';
import { StatusGetController } from '../controllers/StatusGetController';

export function register(router: Router): Router {
  router.get('/status', (_req: Request, res: Response) => StatusGetController)
  return router
}
