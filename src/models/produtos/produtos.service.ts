import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProdutoDto) {

    console.log(data.user_id)

    let user = await this.prisma.user.findFirst({
      where: {
        id: data.user_id
      }
    })


    console.log(user)
    let vendedorId = (user.id)

    console.log(data)
    return await this.prisma.produto.create({
      data: {
        ...data,
        user_id: vendedorId
      },
    });
  }

  async findAll() {
    return await this.prisma.produto.findMany();
    return `This action returns all produtos`;
  }

  async findOne(id: string) {
    return await this.prisma.produto.findFirst({
      where: {
        id,
      },
    });
    return `This action returns a #${id} produto`;
  }

  async update(id: string, data: UpdateProdutoDto) {
    const findProduct = await this.prisma.produto.findFirst({
      where: {
        id,
      },
    });

    if (!findProduct) throw new NotFoundException('Este produto não existe');

    return await this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
