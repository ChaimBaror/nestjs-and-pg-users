import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { string } from 'yargs';

@Injectable()
export class UserService {

  constructor( @InjectRepository(UserEntity)private usersRepository: Repository<UserEntity>,) {}
  create(createUserDto: CreateUserDto) {
    const {username: name, email, password ,firstName, lastName,phone,img,role} = createUserDto
    const user = new UserEntity()
    user.username = name;
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;
    user.img = img;
    user.role = role;
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

 async update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.save({ ...updateUserDto, id: id });
 
  }

  async  remove(id: string) {
    await this.usersRepository.delete(id);

  }

}
