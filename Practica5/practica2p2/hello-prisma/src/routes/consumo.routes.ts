// src/routes/consumoRoutes.ts
import { Router } from 'express';
import {
  createConsumo,
  getConsumos,
  getConsumoById,
  updateConsumo,
  deleteConsumo,
} from '../controllers/consumo.controller';
import { validateConsumo } from '../middlewares/validateConsumo';

const router = Router();

router.post('/', validateConsumo, createConsumo);
router.get('/', getConsumos);
router.get('/:id', getConsumoById);
router.put('/:id', validateConsumo, updateConsumo);
router.delete('/:id', deleteConsumo);

export default router;
