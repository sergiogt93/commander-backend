import { body, ValidationChain } from 'express-validator';

const reqSignInSchema: ValidationChain[] = [
  body('username')
    .exists().withMessage("Campo requerido")
    .isString().withMessage("Soló letras")
    .notEmpty().withMessage("Campo no puede estar vació"),
  body('password')
    .exists().withMessage("Campo requerido")
    .isString().withMessage("Soló caracteres")
    .notEmpty().withMessage("Campo no puede estar vació")
]

export default reqSignInSchema