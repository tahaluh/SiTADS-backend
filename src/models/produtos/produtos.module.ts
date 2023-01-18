import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';

@Module({
  controllers: [ProdutosController],
  imports: [PrismaClient],
  providers: [ProdutosService, PrismaService]
})
export class ProdutosModule {}
