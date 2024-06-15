import { Request, Response } from 'express';
import * as consumoDatasource from 'src/Prisma/Consumo/datasource.ts';

// Crear un nuevo consumo
export const createConsumo = async (req: Request, res: Response) => {
  try {
    const consumo = await consumoDatasource.createConsumo(req.body);
    res.status(201).json(consumo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los consumos
export const getConsumos = async (req: Request, res: Response) => {
  try {
    const consumos = await consumoDatasource.getConsumos();
    res.status(200).json(consumos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un consumo por ID
export const getConsumoById = async (req: Request, res: Response) => {
  try {
    const consumo = await consumoDatasource.getConsumoById(Number(req.params.id));
    if (!consumo) {
      return res.status(404).json({ error: 'Consumo no encontrado' });
    }
    res.status(200).json(consumo);
  } catch (error)
