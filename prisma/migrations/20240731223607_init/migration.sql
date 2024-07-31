/*
  Warnings:

  - You are about to drop the column `authorEmail` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `item` on the `Tasks` table. All the data in the column will be lost.
  - The required column `id` was added to the `Tasks` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_authorEmail_fkey";

-- DropIndex
DROP INDEX "Tasks_authorEmail_key";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "authorEmail",
DROP COLUMN "item",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
