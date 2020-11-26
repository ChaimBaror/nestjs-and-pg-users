import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Length, IsOptional, IsEmail } from 'class-validator';
import { ProductsDTO } from './product.DTO';

export class UpdateProductDto extends PartialType(ProductsDTO) {

  

    @IsOptional()
    category?: string;

    @IsOptional()
    image: string;

    @IsOptional()
    nameProduct: string;

    @IsOptional()
    message: string;

    @IsOptional()
    tineEnd?: any;

    @IsOptional()
    price:  any;

    @IsOptional()
    isActive?: boolean;

   

}