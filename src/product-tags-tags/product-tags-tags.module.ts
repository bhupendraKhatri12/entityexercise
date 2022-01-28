import { Module } from '@nestjs/common';
import { ProductTagsTagsService } from './product-tags-tags.service';
import { ProductTagsTagsController } from './product-tags-tags.controller';

@Module({
  controllers: [ProductTagsTagsController],
  providers: [ProductTagsTagsService]
})
export class ProductTagsTagsModule {}
