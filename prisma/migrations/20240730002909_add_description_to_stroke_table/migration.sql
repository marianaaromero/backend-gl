/*
  Warnings:

  - Added the required column `description` to the `strokes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "strokes_name_key";

-- AlterTable
ALTER TABLE "strokes" ADD COLUMN     "description" TEXT NOT NULL;
