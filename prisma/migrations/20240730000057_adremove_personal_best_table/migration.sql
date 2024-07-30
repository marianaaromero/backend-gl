/*
  Warnings:

  - You are about to drop the `personal_bests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "personal_bests" DROP CONSTRAINT "personal_bests_strokeId_fkey";

-- DropForeignKey
ALTER TABLE "personal_bests" DROP CONSTRAINT "personal_bests_userId_fkey";

-- DropTable
DROP TABLE "personal_bests";
