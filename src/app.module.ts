import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { TagsModule } from './tags/tags.module';
import { ProductTagsTagsModule } from './product-tags-tags/product-tags-tags.module';
import { ImageModule } from './image/image.module';

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
  }), ProductModule, CategoryModule, BrandModule, TagsModule, ProductTagsTagsModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
