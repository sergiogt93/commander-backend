import { Request, Response } from 'express'

export async function ProviderPostController(_req: Request, res: Response): Promise<void> {
  res.status(201).send();
}