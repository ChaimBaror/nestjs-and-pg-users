import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from 'typeorm'
import * as bcrypt from 'bcrypt';
//event model
@Entity()
export class UserEntity {
    
        @PrimaryGeneratedColumn()
        id: string | number
    
        @Column()
        name?: string
    
        @Column()
        password: string
    
        @Column()
        email: string
    
        @BeforeInsert()
        async hashPassword() {
          this.password = await bcrypt.hash(this.password, 10);
        }
}

