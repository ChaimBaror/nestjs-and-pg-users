import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class AuctionEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string | number
  @Column()
    pruductId: string;
    @Column()
    userId: string;
    @Column()
    price: number;
    @Column()
    username:string;
    @Column()
    time: string;
  }