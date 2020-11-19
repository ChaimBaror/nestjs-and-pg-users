import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Unique, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import * as bcrypt from 'bcrypt';
import Products from './product.entity';
//event model

@Entity()
// @Unique(['email'])
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string | number

  @Column()
  username?: string

  @Column()
  password: string

  @Column({ unique: true })
  email: string


  @OneToOne(() => Products)
  @JoinColumn()
  public products: Products;
  // products: Products;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}

