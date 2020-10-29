import { Repository, EntityRepository, } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

@EntityRepository(UserEntity)
export class EventsRepository extends Repository<UserEntity>{


    async createEvent(userEntity: CreateUserDto) {
        const { email, password } = userEntity

        const newEvent = new UserEntity();
        newEvent.email = email
        newEvent.password = password

        return await this.save(newEvent);
    }
    async getallUsers(): Promise<UserEntity[]> {
        return this.find()
    }
    
}