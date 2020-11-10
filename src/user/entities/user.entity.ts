import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Unique} from 'typeorm'
import * as bcrypt from 'bcrypt';
//event model

@Entity()
@Unique(['email'])
export class UserEntity {
    
        @PrimaryGeneratedColumn()
        id: string | number
    
        @Column()
        username?: string

        @Column()
        password: string
    
        @Column()
        email: string
    
        @BeforeInsert()
        async hashPassword() {
          this.password = await bcrypt.hash(this.password, 10);
        }

        async comparePassword(attempt: string): Promise<boolean> {
            return await bcrypt.compare(attempt, this.password);
          }
}

