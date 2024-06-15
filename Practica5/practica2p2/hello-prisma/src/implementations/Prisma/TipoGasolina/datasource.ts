import { PrismaClient, TipoGasolina } from '@prisma/client';

const prisma = new PrismaClient();

export const createTipoGasolina = async (data: Omit<TipoGasolina, 'idgasolina'>): Promise<TipoGasolina> => {
  return await prisma.tipoGasolina.create({ data });
};

export const getTiposGasolina = async (): Promise<TipoGasolina[]> => {
  return await prisma.tipoGasolina.findMany();
};

export const getTipoGasolinaById = async (id: number): Promise<TipoGasolina | null> => {
  return await prisma.tipoGasolina.findUnique({ where: { idgasolina: id } });
};

export const updateTipoGasolina = async (id: number, data: Partial<TipoGasolina>): Promise<TipoGasolina> => {
  return await prisma.tipoGasolina.update({
    where: { idgasolina: id },
    data,
  });
};

export const deleteTipoGasolina = async (id: number): Promise<TipoGasolina> => {
  return await prisma.tipoGasolina.delete({ where: { idgasolina: id } });
};
