import { Router, Request, Response } from 'express';
import { ProviderPostController } from '../controllers/ProviderPostController';

export function register(router: Router): Router {
  router.post('/provider', (_req: Request, _res: Response) => ProviderPostController)
  return router
}