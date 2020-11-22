import { Controller, Request, Body, Get, Post } from "@nestjs/common";
import { ProductsDTO } from "src/user/dto/product.DTO";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    
    constructor(private ProductService : ProductService) {
    }

    @Post()
    create(@Body() productDto: ProductsDTO) {
        console.log('productDto', productDto);
        return this.ProductService.create(productDto);
    }
    @Get()
    findAll(@Request() req) {
      console.log(req.headers);
  
      return this.ProductService.findAll();
    }
}