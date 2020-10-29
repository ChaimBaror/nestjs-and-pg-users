import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

//event model
@Entity('events')
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    firstName?:string;

    @Column()
    lastName?:string;

    @Column()
    email:string;

    @Column()
    password:string;
}

