import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor( @InjectRepository(UserEntity)private usersRepository: Repository<UserEntity>,) {}
  create(createUserDto: CreateUserDto) {
    const {username: name, email, password } = createUserDto
    const user = new UserEntity()
    user.username = name;
    user.email = email;
    user.password = password;
   
    return this.usersRepository.save(user);
    // return this.users
  }
  public async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.usersRepository.find({  email:email });
    if (user) {
      console.log("user by email",user);
      console.log(user);
      return user[0];
    }
    console.log(user,"user by id");
    
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }
  public async checkUser(email: string,password:string): Promise<UserEntity | null> {
    const user = await this.usersRepository.find({  where: [ { email: email, password: password }] });
    if (user) {
      console.log("user by email",user);
      console.log(user);
      
    }
    console.log(user,"user by checkUser");
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }

  findAll() {
    return this.usersRepository.find();
    // return this.users;
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
    // return this.users.find(user => user.id === id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async  remove(id: string) {
    await this.usersRepository.delete(id);
    return `This action removes a #${id} user`;
  }

}
