import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty()
  @IsString()
  vendedor_id: string;

  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNumber()
  preco: number;

  @ApiProperty()
  @IsNumber()
  quantidade: number;

  @ApiProperty()
  @IsString()
  imagem: string;
}
