const express = require("express");
const dotenv = require("dotenv");
import { PrismaClient } from '@prisma/client';
dotenv.config();
const app = express();
const prisma = new PrismaClient();
const port = 3000
app.use(express.json());

// Dispensador routes
app.get('/api/dispensadores', async (req, res) => {
    const dispensadores = await prisma.dispensador.findMany({
      include: {
        consumos: true,
      },
    });
    res.json(dispensadores);
  });
  
  app.get('/api/dispensadores/:id', async (req, res) => {
    const dispensador = await prisma.dispensador.findUnique({
      where: { id_dispensador: parseInt(req.params.id) },
      include: {
        consumos: true,
      },
    });
    res.json(dispensador);
  });
  
  app.post('/api/dispensadores', async (req, res) => {
    const { descripcion, sucursalId } = req.body;
    const dispensador = await prisma.dispensador.create({
      data: {
        descripcion,
      },
    });
    res.json(dispensador);
  });
  
  app.put('/api/dispensadores/:id', async (req, res) => {
    const { descripcion, sucursalId, Estado } = req.body;
    const dispensador = await prisma.dispensador.update({
      where: { id_dispensador: parseInt(req.params.id) },
      data: {
        descripcion,
        Estado,
      },
    });
    res.json(dispensador);
  });
  
  app.delete('/api/dispensadores/:id', async (req, res) => {
    const dispensador = await prisma.dispensador.delete({
      where: { id_dispensador: parseInt(req.params.id) },
    });
    res.json(dispensador);
  });
  
  // TipoGasolina routes
  app.get('/api/tipogasolina', async (req, res) => {
    const tiposGasolina = await prisma.tipoGasolina.findMany({
      include: {
        consumos: true,
      },
    });
    res.json(tiposGasolina);
  });
  
  app.get('/api/tipogasolina/:id', async (req, res) => {
    const tipoGasolina = await prisma.tipoGasolina.findUnique({
      where: { idgasolina: parseInt(req.params.id) },
      include: {
        consumos: true,
      },
    });
    res.json(tipoGasolina);
  });
  
  app.post('/api/tipogasolina', async (req, res) => {
    const { descripcion, costo, sucursalId } = req.body;
    const tipoGasolina = await prisma.tipoGasolina.create({
      data: {
        descripcion,
        costo,
      },
    });
    res.json(tipoGasolina);
  });
  
  app.put('/api/tipogasolina/:id', async (req, res) => {
    const { descripcion, costo, sucursalId, Estado } = req.body;
    const tipoGasolina = await prisma.tipoGasolina.update({
      where: { idgasolina: parseInt(req.params.id) },
      data: {
        descripcion,
        costo,
        Estado,
      },
    });
    res.json(tipoGasolina);
  });
  
  app.delete('/api/tipogasolina/:id', async (req, res) => {
    const tipoGasolina = await prisma.tipoGasolina.delete({
      where: { idgasolina: parseInt(req.params.id) },
    });
    res.json(tipoGasolina);
  });
  
  // Consumo routes
  app.get('/api/consumos', async (req, res) => {
    const consumos = await prisma.consumo.findMany({
      include: {
        tipodegasolina: true,
        dispensador: true,
      },
    });
    res.json(consumos);
  });
  
  app.get('/api/consumos/:id', async (req, res) => {
    const consumo = await prisma.consumo.findUnique({
      where: { idconsumo: parseInt(req.params.id) },
      include: {
        tipodegasolina: true,
        dispensador: true,
      },
    });
    res.json(consumo);
  });
  
  app.post('/api/consumos', async (req, res) => {
    const { tipogasolinaId, dispensadorId, nGalones, total, sucursal } = req.body;
    const consumo = await prisma.consumo.create({
      data: {
        tipodegasolina: { connect: { idgasolina: tipogasolinaId } },
        dispensador: { connect: { id_dispensador: dispensadorId } },
        nGalones,
        total,
      },
    });
    res.json(consumo);
  });
  
  app.put('/api/consumos/:id', async (req, res) => {
    const { tipogasolinaId, dispensadorId, nGalones, total, sucursal, Estado } = req.body;
    const consumo = await prisma.consumo.update({
      where: { idconsumo: parseInt(req.params.id) },
      data: {
        tipodegasolina: { connect: { idgasolina: tipogasolinaId } },
        dispensador: { connect: { id_dispensador: dispensadorId } },
        nGalones,
        total,
        Estado,
      },
    });
    res.json(consumo);
  });
  
  app.delete('/api/consumos/:id', async (req, res) => {
    const consumo = await prisma.consumo.delete({
      where: { idconsumo: parseInt(req.params.id) },
    });
    res.json(consumo);
  });
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })