import * as bcrypt from 'bcrypt';

export function encryptPassword (password: string): string {
  const salt: string = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export function comparePassword (password: string, encodedPassword: string): boolean {
  return bcrypt.compareSync(password, encodedPassword);
}
