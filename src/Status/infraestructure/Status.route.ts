import { Router } from 'express';
import { StatusGetController } from '../application/StatusGetController';

export function register(router: Router): Router {
  router.get('/status', StatusGetController)
  return router
}
