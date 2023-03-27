import { Router } from 'express';
import reqSignInSchema from './requestSchemas/reqSignInSchema';
import reqSignUpSchema from './requestSchemas/reqSignUpSchema';
import { AuthSignupController, AuthSigninController, AuthProfileMeController } from '../application/AuthController';
import { validateReqSchema } from '../../loadingRoutes';
import { verifyAccesPrivateRoute } from '../../Shared/infraestructure/verifyAccesPrivateRoute';

export function register(router: Router): Router {
  router.post('/auth/register', reqSignUpSchema, validateReqSchema, AuthSignupController)
  router.post('/auth/login', reqSignInSchema, validateReqSchema, AuthSigninController)
  router.get('/auth/me', verifyAccesPrivateRoute, AuthProfileMeController)
  return router
}