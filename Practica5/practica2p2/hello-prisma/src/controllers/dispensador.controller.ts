import { Request, Response } from 'express';
import * as dispensadorDatasource from '../datasources/dispensadorDatasource';

// Crear un nuevo dispensador
export const createDispensador = async (req: Request, res: Response) => {
  try {
    const dispensador = await dispensadorDatasource.createDispensador(req.body);
    res.status(201).json(dispensador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los dispensadores
export const getDispensadores = async (req: Request, res: Response) => {
  try {
    const dispensadores = await dispensadorDatasource.getDispensadores();
    res.status(200).json(dispensadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un dispensador por ID
export const getDispensadorById = async (req: Request, res: Response) => {
  try {
    const dispensador = await dispensadorDatasource.getDispensadorById(Number(req.params.id));
    if (!dispensador) {
      return res.status(404).json({ error: 'Dispensador no encontrado' });
    }
    res.status(200).json(dispensador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un dispensador por ID
export const updateDispensador = async (req: Request, res: Response) => {
  try {
    const dispensador = await dispensadorDatasource.updateDispensador(Number(req.params.id), req.body);
    res.status(200).json(dispensador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un dispensador por ID
export const deleteDispensador = async (req: Request, res: Response) => {
  try {
    await dispensadorDatasource.deleteDispensador(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
