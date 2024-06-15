// src/routes/dispensadorRoutes.ts
import { Router } from 'express';
import {
  createDispensador,
  getDispensadores,
  getDispensadorById,
  updateDispensador,
  deleteDispensador,
} from '../controllers/dispensador.controller';
import { validateDispensador } from '../middlewares/validateDispensador';

const router = Router();

router.post('/', validateDispensador, createDispensador);
router.get('/', getDispensadores);
router.get('/:id', getDispensadorById);
router.put('/:id', validateDispensador, updateDispensador);
router.delete('/:id', deleteDispensador);

export default router;
