import {
  Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe, UsePipes,
  UseGuards, UseInterceptors, Request
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';


@UseInterceptors(LoggingInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req) {
    console.log(req.headers);

    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log("remove", id);
    return this.userService.remove(id);
  }
}
