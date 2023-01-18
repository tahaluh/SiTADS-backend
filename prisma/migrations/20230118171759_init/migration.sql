/*
  Warnings:

  - You are about to drop the column `vendedor_id` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the `vendedor` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `produto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "produto" DROP CONSTRAINT "produto_vendedor_id_fkey";

-- DropForeignKey
ALTER TABLE "vendedor" DROP CONSTRAINT "vendedor_user_id_fkey";

-- DropIndex
DROP INDEX "produto_vendedor_id_key";

-- AlterTable
ALTER TABLE "produto" DROP COLUMN "vendedor_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "vendedor";

-- CreateIndex
CREATE UNIQUE INDEX "produto_user_id_key" ON "produto"("user_id");

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
