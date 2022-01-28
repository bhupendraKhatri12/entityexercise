import { Injectable } from '@nestjs/common';
import { CreateProductTagsTagDto } from './dto/create-product-tags-tag.dto';
import { UpdateProductTagsTagDto } from './dto/update-product-tags-tag.dto';

@Injectable()
export class ProductTagsTagsService {
  create(createProductTagsTagDto: CreateProductTagsTagDto) {
    return 'This action adds a new productTagsTag';
  }

  findAll() {
    return `This action returns all productTagsTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productTagsTag`;
  }

  update(id: number, updateProductTagsTagDto: UpdateProductTagsTagDto) {
    return `This action updates a #${id} productTagsTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTagsTag`;
  }
}
