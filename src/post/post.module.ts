import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import {TypeOrmModule} from "@nestjs/typeorm"
import  {Employee} from "./entities/post.entity"

@Module({

  imports:[TypeOrmModule.forFeature([Employee])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
