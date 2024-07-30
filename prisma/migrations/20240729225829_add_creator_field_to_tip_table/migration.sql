/*
  Warnings:

  - Added the required column `creator` to the `tips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tips" ADD COLUMN     "creator" VARCHAR(80) NOT NULL;
