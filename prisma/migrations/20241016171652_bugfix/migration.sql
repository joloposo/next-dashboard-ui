/*
  Warnings:

  - You are about to drop the column `lever` on the `Grade` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[level]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `level` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Grade_lever_key";

-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "lever",
ADD COLUMN     "level" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grade_level_key" ON "Grade"("level");
