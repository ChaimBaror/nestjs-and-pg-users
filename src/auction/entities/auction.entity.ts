
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class AuctionEntity {


    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    userId: string;
    @Column()
    pruductId: string;
    @Column()
    price: string;
    @Column()
    username:string;
    @Column()
    time: string;
  }
