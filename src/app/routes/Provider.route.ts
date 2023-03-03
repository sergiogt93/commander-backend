import { Router } from 'express';
import { ProviderPostController } from '../controllers/ProviderPostController';
import { validateReqSchema } from '../loadingRoutes';
import reqPostSchema from '../validationsRequest/reqPostSchema';

export function register(router: Router): Router {
  router.post('/provider', reqPostSchema, validateReqSchema, ProviderPostController)
  return router
}