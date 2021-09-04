import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Product} from 'types/common';
import {ProductDoc} from 'types/docs';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly Product: Model<ProductDoc>
  ) {}

  async addNewProduct(productData: Product) {
    try {
      const newProduct = await new this.Product(productData).save();
      return newProduct;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async getAllProducts() {
    try {
      const response = await this.Product.find();
      return response;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async getAllActiveProducts() {
    try {
      const response = await this.Product.find();
      const activeData = response.filter((product) => product.active === 1);
      return activeData;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async updateProduct(id: string, productData: Product) {
    try {
      const response = await this.Product.updateOne(
        {
          uniqueId: id
        },
        {
          $set: {
            ...productData
          }
        }
      );
      return response;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  async deleteProduct(id: string) {
    try {
      const response = await this.Product.deleteOne({uniqueId: id});
      return response;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
}
