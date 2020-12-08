import { Controller, Request, Body, Get, Post, Patch, Param, UsePipes, ValidationPipe, Delete, Res, UseInterceptors } from "@nestjs/common";
import { ProductsDTO } from "src/user/dto/product.DTO";
import { ProductService } from "./product.service";
import { UpdateProductDto } from "src/user/dto/update-product.dto.1";
import { diskStorage } from 'multer';
import { FileInterceptor } from "@nestjs/platform-express/multer/interceptors/file.interceptor";
import { UploadedFile } from "@nestjs/common/decorators/http/route-params.decorator";
import { join } from "path";



export const storage = {
  storage: diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
      console.log("file", file);
      const filename = `${req['headers']['id']}.jpg`
      cb(null, `${filename}`)
    }
  })
}
@Controller('products')
export class ProductController {

  constructor(private ProductService: ProductService) {
  }

  @UsePipes(ValidationPipe)
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.ProductService.update(id, updateProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log("remove", id);
    return this.ProductService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', storage))
  uploadFile(@UploadedFile() file) {
    console.log(file)
    return { filename: file.filename }
  }
  @Get('getFile/:id')
  getfile(@Param('id') id, @Res() res: any) {
    return res.sendFile(join(process.cwd(), `uploads/images/${id}.jpg`))
  }
}