import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { EventsRepository } from './dto/events.repositry';
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectRepository(EventsRepository) private eventsRepository: EventsRepository){}
  
  create(createUserDto: CreateUserDto) {
    this.eventsRepository.createEvent(createUserDto);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.eventsRepository.find()
  }

  async remove(id: string): Promise<void> {
    await this.eventsRepository.delete(id);
  }


  // signup(req) {
  //   console.log(req);
  //   const { email, password } = req.body;
  //   return 'This req adds a new user';

  // }
  login(user) {
    const { email, password } = user;
  
    return { email, password }
  }


  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
