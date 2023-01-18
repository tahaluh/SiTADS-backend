import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const findUser = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (findUser) throw new BadRequestException('Este usuário já existe');

    this.prisma.user.create;

    return await this.prisma.user.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
      include: {
      },
    });

    if (!user) throw new NotFoundException('Este usuário não existe');

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const findUser = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!findUser) throw new NotFoundException('Este usuário não existe');

    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
