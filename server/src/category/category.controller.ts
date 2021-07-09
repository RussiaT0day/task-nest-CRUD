import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { CategoryService } from './category.service';
import { Category} from './schemas/catgory.schema';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
  }

  @Get()
  getAll():Promise<Category[]> {
    return this.categoryService.getAll();
  }
	@Post()
  create(@Body() createProductDto: CreateCategoryDto):Promise<Category> {
    return this.categoryService.create(createProductDto);
  }
}
