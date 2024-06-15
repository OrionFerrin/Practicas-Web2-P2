// src/routes/tipoGasolinaRoutes.ts
import { Router } from 'express';
import {
  createTipoGasolina,
  getTiposGasolina,
  getTipoGasolinaById,
  updateTipoGasolina,
  deleteTipoGasolina,
} from '../controllers/tipoGasolina.controller';
import { validateTipoGasolina } from '../middlewares/validateTipoGasolina.ts';

const router = Router();

router.post('/', validateTipoGasolina, createTipoGasolina);
router.get('/', getTiposGasolina);
router.get('/:id', getTipoGasolinaById);
router.put('/:id', validateTipoGasolina, updateTipoGasolina);
router.delete('/:id', deleteTipoGasolina);

export default router;
