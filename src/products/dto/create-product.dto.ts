import { IsString, IsOptional, IsInt, IsPositive, IsDecimal, Min, Max, IsNumberString } from 'class-validator';

export class CreateProductDto {
    
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  @IsPositive()
  quantity_in_stock: number;

  @IsDecimal()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  category?: string;
}

