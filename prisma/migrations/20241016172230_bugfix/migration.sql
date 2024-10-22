/*
  Warnings:

  - You are about to drop the column `name` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the `_ClassToGrade` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[subject]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gradeId` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ClassToGrade" DROP CONSTRAINT "_ClassToGrade_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToGrade" DROP CONSTRAINT "_ClassToGrade_B_fkey";

-- DropIndex
DROP INDEX "Subject_name_key";

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "gradeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "name",
ADD COLUMN     "subject" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "_ClassToGrade";

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subject_key" ON "Subject"("subject");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
