import * as bcrypt from 'bcrypt';

export function encryptPassword (password: string) {
  const salt: string = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export function comparePassword (password: string, encodedPassword: string) {
  return bcrypt.compareSync(password, encodedPassword);
}
