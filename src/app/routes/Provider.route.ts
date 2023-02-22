import { Router } from 'express';
import { body, ValidationChain } from 'express-validator';
import { ProviderPostController } from '../controllers/ProviderPostController';
import { validateReqSchema } from '../loadingRoutes';

const reqPostSchema: ValidationChain[] = [
  body('name').exists().isString()
]

export function register(router: Router): Router {
  router.post('/provider', reqPostSchema, validateReqSchema, ProviderPostController)
  return router
}