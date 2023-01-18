/*
https://docs.nestjs.com/providers#services
*/
import { PrismaService } from 'src/common/database/prisma.service';
import { Injectable } from '@nestjs/common';
import AuthLoginInput from './dto/login.input';
import { NotFoundException } from '@nestjs/common';
import { comparePassword } from 'src/common/helpers/crypto';
import { JwtService } from '@nestjs/jwt';
import { Role, User } from '@prisma/client';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwtService: JwtService
	) {}

	async jwtToken(user: User): Promise<any> {
    const payload = { 
			id: user.id, 
			name: user.name,
			email: user.email,
			role: user.role,
		};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

	async login({ email, password }: AuthLoginInput): Promise<any> {
		const user = await this.prisma.user.findFirst({ where: { email } })

		if (!user) throw new NotFoundException('Este usuário não existe');

		if (!comparePassword(password, user.password)) throw new UnauthorizedException('Credenciais incorretas')

		return this.jwtToken(user)
	}

	async loginAdmin({ email, password }: AuthLoginInput): Promise<any> {
		const user = await this.prisma.user.findFirst({ where: { email, role: Role.ADMIN } })

		if (!user) throw new NotFoundException('Este usuário não existe');

		if (!comparePassword(password, user.password)) throw new UnauthorizedException('Credenciais incorretas')

		return this.jwtToken(user)
	}

	async getAccount(access_token: string): Promise<any> {
		//console.log(access_token)
		const user = this.jwtService.decode(access_token, { json: true })
		return user
	}
}
