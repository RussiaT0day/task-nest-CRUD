import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto} from './dto/create-category.dto';
import { UpdateCategoryDto} from './dto/update-category.dto';
import { Category, CategoryDocument } from './schemas/catgory.schema';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {
  }

  async getAll(): Promise<Category[]> {
    return this.categoryModel.find().exec()
  }

  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = new this.categoryModel(categoryDto)
    return newCategory.save()
  }


  // async getById(id: string): Promise<Product> {
  //   return this.productModel.findById(id)
  // }

  // async create(productDto: CreateProductDto): Promise<Product> {
  //   const newProduct = new this.productModel(productDto)
  //   return newProduct.save()
  // }

  // async remove(id: string): Promise<Product> {
  //   return this.productModel.findByIdAndRemove(id)
  // }
  // async removeAll(): Promise<Product> {
  //   return this.productModel.()
  // }


  // async update(id: string, productDto: UpdateProductDto): Promise<Product> {
  //   return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
  // }
}