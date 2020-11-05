import{ IsEmail, IsNotEmpty, Length }from 'class-validator'

export class CreateUserDto {
   
    lastName?:string
    firstName?:string
    password?:string
   
    @Length(2, 10)
    username?: string

    @IsEmail()
    email: string;
 
    accessToken ?:string
}