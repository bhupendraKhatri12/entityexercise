import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CategoryModule } from "./category/category.module";
import { BrandModule } from './brand/brand.module';
import { TagModule } from './tag/tag.module';
import { ImageModule } from './image/image.module';
import {Product } from "./product/entities/product.entity"
import {Category } from "./category/entities/category.entity"
import {Image } from "./image/entities/image.entity"
import {Brand } from "./brand/entities/brand.entity"
import {Tag } from "./tag/entities/tag.entity"




@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'qwerty',
    database: 'todo',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize:true
  }), ProductModule, CategoryModule, TagModule, ImageModule,BrandModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
