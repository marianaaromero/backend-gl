/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `strokes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "strokes_name_key" ON "strokes"("name");
