import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTagsTagDto } from './create-product-tags-tag.dto';

export class UpdateProductTagsTagDto extends PartialType(CreateProductTagsTagDto) {}
