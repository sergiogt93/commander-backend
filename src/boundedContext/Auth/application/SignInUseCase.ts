import SignInDTO from "./SignInDTO";
import MongoAuthRepository from "../infraestructure/AuthRepository";
import UserAlreadyExistsException from "../domain/UserAreadyExistsException";
import User from "../../User/domain/User";
import { comparePassword } from "../../Shared/infraestructure/Encryption";
import UserInvalidException from "../domain/UserInvalidException";
import { createToken } from "../../Shared/infraestructure/TokenManager";

export default async function SignInUseCase (request: SignInDTO) {
  const { username, password } = request;
  let repository: MongoAuthRepository = new MongoAuthRepository();

  const foundUser: User = await repository.existUser(username);

  if(!foundUser) {
    throw new UserAlreadyExistsException();
  }

  const passwordCorrect: boolean = foundUser === null
    ? false
    : comparePassword(password, foundUser.password);

  if (!(foundUser && passwordCorrect)) {
    throw new UserInvalidException();
  }

  const token: string = createToken({ id: foundUser.id });

  return token
}