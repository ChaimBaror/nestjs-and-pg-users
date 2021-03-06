import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ProductsEntity from 'src/user/entities/product.entity';
import { ProductsDTO } from "src/user/dto/product.DTO";
import { UpdateProductDto } from 'src/user/dto/update-product.dto.1';


@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductsEntity) private repository: Repository<ProductsEntity>, ) { }
    create(ProductsDTO: ProductsDTO) {
        const { nameProduct, category, price, isActive, image, message, timeEnd: tineEnd } = ProductsDTO

        const product = new ProductsEntity()
        product.nameProduct = nameProduct;
        product.category = category;
        product.price = price;
        product.image = image;
        product.message = message;
        product.timeEnd = tineEnd;
        product.isActive = isActive;

        return this.repository.save(product);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: string) {
        return this.repository.findOne(id);
      }

    async update(id: string, updateProDto: UpdateProductDto) {
        return this.repository.save({ ...updateProDto, id: id });

    }
    async  remove(id: string) {
        await this.repository.delete(id);

    }
}