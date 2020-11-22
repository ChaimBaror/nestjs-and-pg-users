import { Module } from "@nestjs/common";
import ProductsEntity from "src/user/entities/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({
    imports: [
      TypeOrmModule.forFeature([ProductsEntity]),
   ],
  
    controllers: [ProductController ],
    providers: [ ProductService]
  })
  export class ProductModule { }