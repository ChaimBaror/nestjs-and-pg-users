import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Unique, OneToMany, OneToOne, JoinColumn, Admin } from 'typeorm'
import * as bcrypt from 'bcrypt';
import ProductsEntity from './product.entity';
//event model

  

export type NewType = "user" | "Admin" ;

@Entity()
// @Unique(['email'])
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string | number

  @Column()
  username: string
  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ nullable: true })
  img: string;
  @Column({ default: "user"})
  role: NewType

  @Column()
  password: string

  @Column({ unique: true })
  email: string


  @OneToOne(() => ProductsEntity)
  @JoinColumn()
  public products: ProductsEntity;
  // products: Products;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}

