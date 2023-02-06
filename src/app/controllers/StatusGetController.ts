import { Request, Response } from 'express'

export async function StatusGetController(req: Request, res: Response): Promise<void> {
  res.status(200).send();
}