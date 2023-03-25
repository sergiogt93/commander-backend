import { Request, Response } from 'express';
import { encryptPassword } from '../../Shared/infraestructure/Encryption';
import SignInUseCase from './SignInUseCase';
import SignUpUseCase from './SignUpUseCase';

export async function AuthSignupController(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    const hashPassword: string = encryptPassword(password);
    const token: any = await SignUpUseCase({ username, password: hashPassword });
    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}

export async function AuthSigninController(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    const token: any = await SignInUseCase({ username, password });
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}