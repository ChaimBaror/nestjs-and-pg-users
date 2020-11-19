import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";



@Entity()
class Products {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @Column()
  public price: string;
 
  @Column()
  public country: string;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.products)
  public user: UserEntity;
}
 
export default Products;