import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";



@Entity()
class ProductsEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;
 
  @Column()
  category: string;

 
  @Column()
  public price: string;
 
  @Column()
    image: string;

    @Column()
    nameProduct: string;

    @Column()
    message: string;

    @Column()
    timeEnd: string;

    @Column({ default: true})
    isActive: boolean;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.products)
  public user: UserEntity;
}
 
export default ProductsEntity;