import { Body, Response, Controller, Post, HttpStatus, Get, Param } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UserService,
      ) {}

      @Get()
      validateUser(@Body() user: CreateUserDto) {
          return this.authService.validateUser(user);
      }
     
    @Post()
    public async register(@Response() res, @Body() createUserDto: CreateUserDto) {
      const result = await this.authService.login(createUserDto);
      if (result) {
        return res.status(HttpStatus.BAD_REQUEST).json(result);
      }
      return res.status(HttpStatus.OK).json(result);
    }


    @Get(':token')
    getUserByToken(@Param('token') token: CreateUserDto) {
        return this.authService.getToken(token);
    }
    
  
}
