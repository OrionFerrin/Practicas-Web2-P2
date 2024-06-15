// src/middlewares/validateConsumo.ts
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateConsumo = [
  body('tipogasolina').isInt().withMessage('El tipo de gasolina debe ser un número entero.'),
  body('dispensadorid').isInt().withMessage('El dispensador debe ser un número entero.'),
  body('nGalones').isInt({ gt: 0 }).withMessage('El número de galones debe ser un número entero positivo.'),
  body('total').isInt({ gt: 0 }).withMessage('El total debe ser un número entero positivo.'),
  body('Estado').optional().isString().withMessage('El estado debe ser una cadena.'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
