import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/common/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UsersController],
  imports: [PrismaClient],
  providers: [UsersService, PrismaService]
})
export class UsersModule {}
