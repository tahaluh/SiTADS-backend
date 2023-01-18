import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './models/auth/auth.module';
import { AuthService } from './models/auth/auth.service';
import { PrismaService } from './common/database/prisma.service';
import { UsersModule } from './models/users/users.module';
import { JwtStrategy } from './common/guards/jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ProdutosModule } from './models/produtos/produtos.module';

@Module({
  imports: [AuthModule,UsersModule,JwtModule, ProdutosModule],
  controllers: [AppController],
  providers: [
    PrismaService, 
    AppService, 
    AuthService, 
    JwtStrategy],
})
export class AppModule {}
