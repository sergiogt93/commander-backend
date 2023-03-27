import mongoose, { Model } from 'mongoose';
import userSchema from '../../User/infraestructure/UserSchema';
import SignInDTO from '../application/DTO/SignInDTO';
import SignUpDTO from '../application/DTO/SignUpDTO';
import IAuthRepository from '../domain/IAuthRepository';
import User from '../../User/domain/User';

export default class AuthRepository implements IAuthRepository {
  public readonly model: Model<any>

  constructor() {
    this.model = mongoose.model(this.collectionName(), userSchema)
  }

  private collectionName(): string {
    return 'users';
  }

  public register(user: SignUpDTO): Promise<User> {
    const { username, password } = user;
    const newUser: Promise<User> = this.model.create({
      username, password
    })
    return newUser;
  }

  public login(credentials: SignInDTO)  {
    return '';
  }

  public refresh()  {
    return '';
  }

  public logout()  {
    return '';
  }

  public existUser(username: string): Promise<User> {
    return this.model.findOne({
      username
    }).exec();
  }

  public me(id: string): Promise<User>  {
    return this.model.findOne({
      _id: id
    }).exec();
  }
}