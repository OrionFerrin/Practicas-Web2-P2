import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateTipoGasolina = [
  body('descripcion').isString().notEmpty().withMessage('La descripción debe ser una cadena no vacía.'),
  body('costo').isInt({ gt: 0 }).withMessage('El costo debe ser un número positivo.'),
  body('consumos').isArray().withMessage('Los consumos deben ser un array.'),
  body('Estado').optional().isString().withMessage('El estado debe ser una cadena.'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
