import { body, ValidationChain } from 'express-validator';

const reqSignUpSchema: ValidationChain[] = [
  body('username')
    .exists().withMessage("Campo requerido")
    .isString().withMessage("Soló letras")
    .notEmpty().withMessage("Campo no puede estar vació")
    .trim().escape(),
  body('password')
    .exists().withMessage("Campo requerido")
    .isString().withMessage("Soló letras")
    .notEmpty().withMessage("Campo no puede estar vació")
]

export default reqSignUpSchema