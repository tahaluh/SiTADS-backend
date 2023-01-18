/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Request, UseGuards, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import AuthLoginInput from './dto/login.input';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
	) {}

	@Post('login')
	async login(@Body() data: AuthLoginInput): Promise<String | null> {
		return await this.authService.login(data);
	}

	@Post('login-admin')
	async loginAdmin(@Body() data: AuthLoginInput): Promise<String | null> {
		return await this.authService.loginAdmin(data);
	}

	@Auth()
	@Get('account')
	async getAccount(@Headers() headers): Promise<User> {
		return await this.authService.getAccount(headers.authorization.split(' ')[1])
	}
}
