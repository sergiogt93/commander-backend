import { Router } from 'express';
import glob from 'glob';

const router: Router = Router();

function registerFile(routePath: string) {
  const route = require(routePath);
  route.register(router);
}

export default function loadingRoutes() {
  const routes: string[] = glob.sync(__dirname + '/routes/**/*route.ts');
  routes.map(route => registerFile(route));
  return router;
}