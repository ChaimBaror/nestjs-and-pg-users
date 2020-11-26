import { IsNotEmpty } from "class-validator";

export class ProductsDTO {
    category?: string;
    id: string;
    image: string;
    @IsNotEmpty()
    nameProduct: string;
    message: string;
    timeEnd?: any;
    
    price:  string;
    auction?: AuctionDTO[];
    isActive?: boolean;
  }
  
  export class AuctionDTO {
    userId: string;
    price: number;
    time?: string;
  }