/*
  Warnings:

  - Added the required column `descricao` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produto" ADD COLUMN     "descricao" TEXT NOT NULL,
ALTER COLUMN "preco" SET DATA TYPE TEXT,
ALTER COLUMN "quantidade" SET DATA TYPE TEXT;
