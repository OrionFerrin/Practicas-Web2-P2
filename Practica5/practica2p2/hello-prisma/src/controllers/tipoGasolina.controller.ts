import { Request, Response } from 'express';
import * as tipoGasolinaDatasource from '../datasources/tipoGasolinaDatasource';

// Crear un nuevo tipo de gasolina
export const createTipoGasolina = async (req: Request, res: Response) => {
  try {
    const tipoGasolina = await tipoGasolinaDatasource.createTipoGasolina(req.body);
    res.status(201).json(tipoGasolina);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los tipos de gasolina
export const getTiposGasolina = async (req: Request, res: Response) => {
  try {
    const tiposGasolina = await tipoGasolinaDatasource.getTiposGasolina();
    res.status(200).json(tiposGasolina);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un tipo de gasolina por ID
export const getTipoGasolinaById = async (req: Request, res: Response) => {
  try {
    const tipoGasolina = await tipoGasolinaDatasource.getTipoGasolinaById(Number(req.params.id));
    if (!tipoGasolina) {
      return res.status(404).json({ error: 'Tipo de gasolina no encontrado' });
    }
    res.status(200).json(tipoGasolina);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un tipo de gasolina por ID
export const updateTipoGasolina = async (req: Request, res: Response) => {
  try {
    const tipoGasolina = await tipoGasolinaDatasource.updateTipoGasolina(Number(req.params.id), req.body);
    res.status(200).json(tipoGasolina);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un tipo de gasolina por ID
export const deleteTipoGasolina = async (req: Request, res: Response) => {
  try {
    await tipoGasolinaDatasource.deleteTipoGasolina(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
