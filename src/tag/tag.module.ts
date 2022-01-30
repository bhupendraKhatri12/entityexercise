import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import {TypeOrmModule} from "@nestjs/typeorm"
import  {Tag} from "./entities/tag.entity"
import  {Category} from "../category/entities/category.entity"
import {Product}  from "../product/entities/product.entity"



@Module({
  imports:[TypeOrmModule.forFeature([Tag,Category,Product])],
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule {}
