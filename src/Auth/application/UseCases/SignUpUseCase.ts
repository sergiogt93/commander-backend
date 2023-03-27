import User from "../../../User/domain/User";
import UserNotExistsException from "../../domain/Exceptions/UserAreadyExistsException";
import MongoAuthRepository from "../../infraestructure/AuthRepository";
import SignUpDTO from "../DTO/SignUpDTO";
import { createToken } from "../../../Shared/infraestructure/TokenManager";

export default async function SignUpUseCase (request: SignUpDTO): Promise<string> {
  let repository: MongoAuthRepository = new MongoAuthRepository();

  const foundUser: User = await repository.existUser(request.username);

  if(foundUser) {
    throw new UserNotExistsException();
  }

  const newUser: User = await repository.register(request);

  if(!newUser) {
    throw new Error('Fallo al crear usuario');
  }

  const token: string = createToken({ id: newUser.id });

  return token;
}