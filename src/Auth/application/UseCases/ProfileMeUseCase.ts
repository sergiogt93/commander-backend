import { verifyToken } from "../../../Shared/infraestructure/TokenManager";
import { getDocumentProperty } from "../../../Shared/infraestructure/GetDocumentProperty";
import { JwtPayload } from "jsonwebtoken";
import MongoAuthRepository from "../../infraestructure/AuthRepository";
import User from "../../../User/domain/User";
import UserNotExistsException from "../../../Auth/domain/Exceptions/UserNotExistsException";

export default async function ProfileMeUseCase (token: string): Promise<User> {
  let repository: MongoAuthRepository = new MongoAuthRepository();

  const decoded: string | JwtPayload = verifyToken(token);

  const user_id: string = getDocumentProperty(decoded, 'id');

  const user: User = await repository.me(user_id);

  if(!user) {
    throw new UserNotExistsException();
  }

  return user;
}