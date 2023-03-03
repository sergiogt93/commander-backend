import { Request, Response } from 'express'
import Provider from 'src/boundedContext/Provider/domain/Provider';
// import { ProviderCreatorRequest } from 'src/boundedContext/Provider/application/ProviderCreatorRequest';
import providerCreator from '../../boundedContext/Provider/application/ProviderCreator';

export async function ProviderPostController(req: Request, res: Response) {
  const { name } = req.body;

  const provider: Provider = await providerCreator({ name });

  res.status(201).json(provider);
}