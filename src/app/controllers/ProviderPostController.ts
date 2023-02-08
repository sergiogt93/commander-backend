import { Request, Response } from 'express'
import httpStatus from 'http-status'

export async function ProviderPostController(_req: Request, res: Response): Promise<void> {
  res.send(httpStatus.CREATED).send();
}