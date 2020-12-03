import { Controller, Post, Body, Get } from "@nestjs/common";
import { AuctionDTO } from "src/user/dto/Auction.DTO";


@Controller('auction')
export class AuctionController {
    
    constructor() {
    }
    

    @Post()
    create(@Body() auctionDTO: AuctionDTO) {
        console.log('auctionDTO', auctionDTO);
        // return this.AuctionService.create(auctionDTO);
    }

    @Get()
    findAll() {
      // return this.AuctionService.findAll();
    }


}