import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTagsTagsService } from './product-tags-tags.service';
import { CreateProductTagsTagDto } from './dto/create-product-tags-tag.dto';
import { UpdateProductTagsTagDto } from './dto/update-product-tags-tag.dto';

@Controller('product-tags-tags')
export class ProductTagsTagsController {
  constructor(private readonly productTagsTagsService: ProductTagsTagsService) {}

  @Post()
  create(@Body() createProductTagsTagDto: CreateProductTagsTagDto) {
    return this.productTagsTagsService.create(createProductTagsTagDto);
  }

  @Get()
  findAll() {
    return this.productTagsTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTagsTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTagsTagDto: UpdateProductTagsTagDto) {
    return this.productTagsTagsService.update(+id, updateProductTagsTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTagsTagsService.remove(+id);
  }
}
