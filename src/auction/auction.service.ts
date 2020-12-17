import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { AuctionEntity } from './entities/auction.entity';

@Injectable()
export class AuctionService {

  constructor( @InjectRepository(AuctionEntity)private Repository: Repository<AuctionEntity>,) {}
 
  
  create(createAuctionDto: CreateAuctionDto) {
    const {userId,price,username,pruductId,time} = createAuctionDto
    const Auction = new AuctionEntity()
    Auction.pruductId=pruductId
    Auction.price=price;
    Auction.userId=userId;
    Auction.username=username;
    Auction.time=time
    return this.Repository.save(Auction);

  }

  findAll() {
    return this.Repository.find()
  }

 findByPruduct(pruductId: string) {
    return this.Repository.find({pruductId:pruductId});;
  }
  
  findByUser(userId: string) {
    return this.Repository.find({userId:userId});;
  }

  update(id: string, updateAuctionDto: UpdateAuctionDto) {
    return this.Repository.save({ ...updateAuctionDto, id: id });

  }

 async remove(id: string) {
    await this.Repository.delete(id);
  }
}
