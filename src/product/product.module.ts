import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import  {Tag} from "../tag/entities/tag.entity"

@Module({
  imports:[TypeOrmModule.forFeature([Product,Tag])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
