import{ IsEmail, IsNotEmpty, IsOptional, Length }from 'class-validator'

export class CreateUserDto {
    @Length(2, 10)
    @IsOptional()
    lastName?:string
    
    @Length(2, 10)
    @IsOptional()
    firstName?:string

    @IsNotEmpty()
    password?:string
   
    @Length(2, 20)
    username?: string

    @IsEmail()
    email: string;
 
    accessToken ?:string
}