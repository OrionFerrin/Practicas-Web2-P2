import { PrismaClient, Dispensador } from '@prisma/client';

const prisma = new PrismaClient();

export const createDispensador = async (data: Omit<Dispensador, 'id_dispensador'>): Promise<Dispensador> => {
  return await prisma.dispensador.create({ data });
};

export const getDispensadores = async (): Promise<Dispensador[]> => {
  return await prisma.dispensador.findMany();
};

export const getDispensadorById = async (id: number): Promise<Dispensador | null> => {
  return await prisma.dispensador.findUnique({ where: { id_dispensador: id } });
};

export const updateDispensador = async (id: number, data: Partial<Dispensador>): Promise<Dispensador> => {
  return await prisma.dispensador.update({
    where: { id_dispensador: id },
    data,
  });
};

export const deleteDispensador = async (id: number): Promise<Dispensador> => {
  return await prisma.dispensador.delete({ where: { id_dispensador: id } });
};
