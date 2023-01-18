import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsString()
  descricao: string;

  @ApiProperty()
  @IsNumber()
  preco: string;

  @ApiProperty()
  @IsNumber()
  quantidade: string;

  @ApiProperty()
  @IsString()
  imagem: string;

  @ApiProperty()
  @IsString()
  categoria: string;
}
