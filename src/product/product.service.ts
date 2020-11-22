import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ProductsEntity from 'src/user/entities/product.entity';
import { ProductsDTO } from "src/user/dto/product.DTO";


@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductsEntity) private repository: Repository<ProductsEntity>, ) { }
    create(ProductsDTO: ProductsDTO) {
        const { nameProduct, category, price, isActive,image,message,tineEnd } = ProductsDTO

        const product = new ProductsEntity()
        product.nameProduct = nameProduct;
        product.category = category;
        product.price = price;
        product.image = image;
        product.message = message;
        product.tineEnd = tineEnd;
        product.isActive = isActive;

        return this.repository.save(product);
    }

    findAll() {
        return this.repository.find();
    }
}
