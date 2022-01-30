import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { Category } from '../category/entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Tag} from "./entities/tag.entity"
@Module({
  imports:[TypeOrmModule.forFeature([Tag,Category])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
