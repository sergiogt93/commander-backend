import { body, ValidationChain } from 'express-validator';

const reqPostSchema: ValidationChain[] = [
  body('name')
    .exists().withMessage("Campo requerido")
    .isString().withMessage("Soló letras")
    .notEmpty().withMessage("Campo no puede estar vació")
]

export default reqPostSchema