import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule} from './category/category.module';

@Module({
  imports: [
    CategoryModule,
    ProductsModule,
    MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.pbna6.mongodb.net/products?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
