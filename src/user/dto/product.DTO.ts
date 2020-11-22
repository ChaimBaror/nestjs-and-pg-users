export class ProductsDTO {
    category?: string;
    id: string;
    image: string;
    nameProduct: string;
    message: string;
    tineEnd?: any;
    price:  string;
    auction?: AuctionDTO[];
    isActive?: boolean;
  }
  
  export class AuctionDTO {
    userId: string;
    price: number;
    time?: string;
  }