import { Router } from 'express';
import { ProviderPostController } from '../controllers/ProviderPostController';

export function register(router: Router): Router {
  router.post('/provider', ProviderPostController)
  return router
}