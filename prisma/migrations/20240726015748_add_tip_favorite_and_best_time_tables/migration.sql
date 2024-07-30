/*
  Warnings:

  - You are about to drop the column `recommendedLevel` on the `routines` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "routines" DROP COLUMN "recommendedLevel",
ADD COLUMN     "recommended_level" "Level";

-- CreateTable
CREATE TABLE "users_favorite_routines" (
    "routineId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "tips" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(80) NOT NULL,
    "description" TEXT,
    "url" VARCHAR(255) NOT NULL,
    "level" "Level",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_favorite_tips" (
    "tipId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "personal_bests" (
    "id" SERIAL NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "distance" INTEGER NOT NULL,
    "strokeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personal_bests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_favorite_routines_routineId_userId_key" ON "users_favorite_routines"("routineId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_favorite_tips_tipId_userId_key" ON "users_favorite_tips"("tipId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "personal_bests_strokeId_userId_key" ON "personal_bests"("strokeId", "userId");

-- AddForeignKey
ALTER TABLE "users_favorite_routines" ADD CONSTRAINT "users_favorite_routines_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_favorite_routines" ADD CONSTRAINT "users_favorite_routines_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_favorite_tips" ADD CONSTRAINT "users_favorite_tips_tipId_fkey" FOREIGN KEY ("tipId") REFERENCES "tips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_favorite_tips" ADD CONSTRAINT "users_favorite_tips_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal_bests" ADD CONSTRAINT "personal_bests_strokeId_fkey" FOREIGN KEY ("strokeId") REFERENCES "strokes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal_bests" ADD CONSTRAINT "personal_bests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
