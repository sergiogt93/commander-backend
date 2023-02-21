import { Request, Response } from 'express'
import providerCreator from '@src/boundedContext/Provider/application/ProviderCreator';

export async function ProviderPostController(req: Request, res: Response): Promise<void> {
  const { name } = req.body;

  providerCreator(name);

  res.status(201).send();
}