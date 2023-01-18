import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './common/database/prisma.service';
import { UsersModule } from './users/users.module';
import { JwtStrategy } from './common/guards/jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule,UsersModule,JwtModule],
  controllers: [AppController],
  providers: [
    PrismaService, 
    AppService, 
    AuthService, 
    JwtStrategy],
})
export class AppModule {}
