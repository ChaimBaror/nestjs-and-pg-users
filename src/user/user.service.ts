import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor( @InjectRepository(UserEntity)private usersRepository: Repository<UserEntity>,) {}
  create(createUserDto: CreateUserDto) {
    const {name, email, password } = createUserDto
    const user = new UserEntity()
    user.name = name;
    user.email = email;
    user.password = password;
   
    return this.usersRepository.save(user);
    // return this.users
  }

  findAll() {
    return this.usersRepository.find();
    // return this.users;
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
    // return this.users.find(user => user.id === id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async  remove(id: number) {
    await this.usersRepository.delete(id);
    // return `This action removes a #${id} user`;
  }

}
