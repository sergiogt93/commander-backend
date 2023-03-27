import User from 'src/boundedContext/User/domain/User';
import SignInDTO from '../application/DTO/SignInDTO';
import SignUpDTO from '../application/DTO/SignUpDTO';

export default interface IAuthRepository {
  register(user: SignUpDTO): Promise<User>;
  login(credentials: SignInDTO): string;
  refresh(): string;
  logout(): string;
  existUser(criteria: Object): Promise<User>;
  me(id: string): Promise<User>;
}