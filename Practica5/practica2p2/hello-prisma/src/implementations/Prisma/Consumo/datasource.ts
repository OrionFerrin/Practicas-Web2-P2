import { PrismaClient, Consumo } from '@prisma/client';

const prisma = new PrismaClient();

export const createConsumo = async (data: Omit<Consumo, 'idconsumo'>): Promise<Consumo> => {
  return await prisma.consumo.create({ data });
};

export const getConsumos = async (): Promise<Consumo[]> => {
  return await prisma.consumo.findMany();
};

export const getConsumoById = async (id: number): Promise<Consumo | null> => {
  return await prisma.consumo.findUnique({ where: { idconsumo: id } });
};

export const updateConsumo = async (id: number, data: Partial<Consumo>): Promise<Consumo> => {
  return await prisma.consumo.update({
    where: { idconsumo: id },
    data,
  });
};

export const deleteConsumo = async (id: number): Promise<Consumo> => {
  return await prisma.consumo.delete({ where: { idconsumo: id } });
};
