export default class UserNotExistsException extends Error {
  public readonly statusCode: number

  constructor () {
    super('User not exists');
    this.statusCode = 404;
  }
}