import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {  
    @ApiProperty()
    @IsString()
    @IsOptional()
    nome?: string;
  
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    preco?: number;
  
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    quantidade?: number;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    imagem?: string;  
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    categoria?: string;  
}
