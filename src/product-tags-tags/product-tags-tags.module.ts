import { Module } from '@nestjs/common';
import { ProductTagsTagsService } from './product-tags-tags.service';
import { ProductTagsTagsController } from './product-tags-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {ProductTagsTag} from "./entities/product-tags-tag.entity"


@Module({
  imports:[TypeOrmModule.forFeature([ProductTagsTag])],
  controllers: [ProductTagsTagsController],
  providers: [ProductTagsTagsService]
})
export class ProductTagsTagsModule {}
