-- CreateTable
CREATE TABLE "Dispensador" (
    "id_dispensador" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL,
    "Estado" TEXT DEFAULT 'Activa'
);

-- CreateTable
CREATE TABLE "TipoGasolina" (
    "idgasolina" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL,
    "costo" INTEGER NOT NULL,
    "Estado" TEXT DEFAULT 'Activa'
);

-- CreateTable
CREATE TABLE "Consumo" (
    "idconsumo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipogasolina" INTEGER NOT NULL,
    "dispensadorid" INTEGER NOT NULL,
    "nGalones" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "Estado" TEXT DEFAULT 'Activa',
    CONSTRAINT "Consumo_tipogasolina_fkey" FOREIGN KEY ("tipogasolina") REFERENCES "TipoGasolina" ("idgasolina") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consumo_dispensadorid_fkey" FOREIGN KEY ("dispensadorid") REFERENCES "Dispensador" ("id_dispensador") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Dispensador_descripcion_key" ON "Dispensador"("descripcion");
