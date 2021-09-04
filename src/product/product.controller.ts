import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Res
} from '@nestjs/common';
import {Response} from 'express';
import {Product} from 'types/common';
import {ProductService} from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addNewProduct(@Body() productData: Product, @Res() res: Response) {
    try {
      const data = await this.productService.addNewProduct(productData);
      return res.status(200).json({success: true, data});
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }

  @Get()
  async getAllProducts(@Res() res: Response) {
    try {
      const data = await this.productService.getAllProducts();
      return res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      return res.status(400).json({success: false, error: err});
    }
  }

  @Get('/active')
  async getAllActivePoints(@Res() res: Response) {
    try {
      const data = await this.productService.getAllActiveProducts();
      return res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }

  @Delete(':uniqueId')
  async deleteProduct(@Param('uniqueId') id: string, @Res() res: Response) {
    try {
      const data = await this.productService.deleteProduct(id);
      return res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }

  @Put(':uniqueId')
  async updateProduct(
    @Param('uniqueId') id: string,
    @Body() productData: Product,
    @Res() res: Response
  ) {
    try {
      const data = await this.productService.updateProduct(id, productData);
      return res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({success: false, error: err});
    }
  }
}
