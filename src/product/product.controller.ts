import { Controller, Request, Body, Get, Post, Patch, Param } from "@nestjs/common";
import { ProductsDTO } from "src/user/dto/product.DTO";
import { ProductService } from "./product.service";
import { UpdateProductDto } from "src/user/dto/update-product.dto.1";

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

    @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.ProductService.update(id, updateProductDto);
  }
}