import { Controller, Get, Post, Body, Put, Param, Delete, Req, HttpCode, Res, HttpStatus, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}
  

  @Post('/sign')
  async signup(@Body() createUserDto: CreateUserDto){
    const user = await this.userService.create(createUserDto);

  }
   
 
  @Post('/login')
  @UsePipes(ValidationPipe)
  login(@Body() loginDto: CreateUserDto){
    console.log(`${loginDto} this loggin`);
    
    return this.userService.login(loginDto);
    
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }
  // @Post('/status')
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([res]);
  // }


  // @Get()
  // async findAll(): Promise<UserEntity[]> {
  //   return this.userService.findAll();
  // }

 

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe ) id: number) {
  //   return this.userService.remove(+id);
  // }
}
