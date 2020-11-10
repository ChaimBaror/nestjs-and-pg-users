import{ IsEmail, IsNotEmpty, Length }from 'class-validator'

export class CreateUserDto {
    @Length(2, 10)
    lastName?:string
    
    @Length(2, 10)
    firstName?:string

    @IsNotEmpty()
    password?:string
   
    @Length(2, 10)
    username?: string

    @IsEmail()
    email: string;
 
    accessToken ?:string
}