import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ enum: Role, enumName: 'Role' })
  role?: Role;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  endereço: string;

  @ApiProperty()
  @IsString()
  cpf: string;
}
