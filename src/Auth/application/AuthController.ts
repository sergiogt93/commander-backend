import User from '../../User/domain/User';
import { Request, Response } from 'express';
import { encryptPassword } from '../../Shared/infraestructure/Encryption';
import ProfileMeUseCase from './UseCases/ProfileMeUseCase';
import SignInUseCase from './UseCases/SignInUseCase';
import SignUpUseCase from './UseCases/SignUpUseCase';

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

export async function AuthProfileMeController(req: Request, res: Response) {
  try {
    const user: User = await ProfileMeUseCase(req.headers.authorization);
    res.status(200).json({ user });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}