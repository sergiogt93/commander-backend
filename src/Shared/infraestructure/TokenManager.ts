import jwt from 'jsonwebtoken';

function hasPrivateKey(key: string | undefined): void {
  if(!key) {
    throw new Error('Falta la clave secreta del token');
  }
};

export function decode(token: any, options?: any) {
  const opt: Object = Object.assign({}, options);
  hasPrivateKey(process.env.JWT_PASSWORD);
  return jwt.decode(token, opt);
}

export function createToken(data: string | object | Buffer, options?: any) {
  const opt: Object = Object.assign({}, options);
  hasPrivateKey(process.env.JWT_PASSWORD);
  return jwt.sign(data, process.env.JWT_PASSWORD as string, opt);
}

export function verifyToken(token: string, options?: any) {
  const opt: Object = Object.assign({}, options, { ignoreExpiration: true });
  hasPrivateKey(process.env.JWT_PASSWORD);
  return jwt.verify(token, process.env.JWT_PASSWORD as string, opt);
}