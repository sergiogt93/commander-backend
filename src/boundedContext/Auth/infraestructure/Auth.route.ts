import { Router } from 'express';
import reqSignInSchema from './reqSignInSchema';
import reqSignUpSchema from './reqSignUpSchema';
import { AuthSignupController, AuthSigninController } from '../application/AuthController';
import { validateReqSchema } from '../../../loadingRoutes';

export function register(router: Router): Router {
  router.post('/auth/signup', reqSignUpSchema, validateReqSchema, AuthSignupController)
  router.post('/auth/signin', reqSignInSchema, validateReqSchema, AuthSigninController)
  return router
}