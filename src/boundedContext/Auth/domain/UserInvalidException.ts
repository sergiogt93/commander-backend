export default class UserInvalidException extends Error {
  public readonly statusCode: number

  constructor () {
    super('invalid user or password');
    this.statusCode = 401;
  }
}