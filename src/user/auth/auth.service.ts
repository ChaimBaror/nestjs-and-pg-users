import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService, private  jwtSer: JwtService) { }


    async validateUser(signIn: CreateUserDto) {
        const { email, password } = signIn
        console.log(email, password);
        const user = await this.usersService.findByEmail(email);
        console.log(user);
        if (user) {
            const isPasswordMatching = await bcrypt.compare(signIn.password, user.password);
            console.log(isPasswordMatching);

            if (!isPasswordMatching) {
                throw new HttpException('Wrong password or email is not', HttpStatus.BAD_REQUEST);
            }
            // if (user && user.password === password) {
            const { password, ...result } = user;
            // console.log("is work ", result);

            return result;
        }

        throw new UnauthorizedException('WRONG TOKEN OR NOT GIVEN');

    }
    async login(login: CreateUserDto) {
        const user = await this.validateUser(login);
        const payload = { username: user.email, userId: user.id };
        return {
            ...user,
            accessToken: this.jwtSer.sign(payload),
        };
    }

    getToken(accessToken){
       const token =this.jwtSer.verify(accessToken)
       return token
      
    }

    


}


