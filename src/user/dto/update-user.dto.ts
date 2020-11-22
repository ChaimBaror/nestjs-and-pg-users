import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Length, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    lastName?:string
    
    @IsOptional()
    firstName?:string

    password?:string
   
    @Length(2, 20)
    username?: string

    @IsEmail()
    email: string;

    @IsOptional()
    phone: string;

    @IsOptional()
    img:string;

   

}