import { Router, Request, Response, NextFunction } from 'express';
import { ValidationError, validationResult, Result } from 'express-validator';
import glob from 'glob';

const router: Router = Router();

function registerFile(routePath: string) {
  const route = require(routePath);
  route.register(router);
}

export function loadingRoutes() {
  const routes: string[] = glob.sync(__dirname + '/routes/**/*route.ts');
  routes.map(route => registerFile(route));
  return router;
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
  const validationErrors: Result<ValidationError> = validationResult(req);

  if(validationErrors.isEmpty()) {
    return next();
  }

  const errors: { [x: string]: string; }[] = validationErrors.array().map(
    (err: ValidationError) => ({ [err.param]: err.msg })
  );

  return res.status(422).json(errors);
}