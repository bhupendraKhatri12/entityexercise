import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Employee } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from "../app.service"
import { HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class PostService {

  constructor(@InjectRepository(Employee) private employeeRepo: Repository<Employee>) { }



  //create post 
  async create(createPostDto: CreatePostDto) {
    const newemp = await this.employeeRepo.create(createPostDto);
    await this.employeeRepo.save(newemp);
    return newemp;
  }


  //get respostory for all post
  findAll() {
    return this.employeeRepo.find();
  }

  //find by id 
  async findOne(id: number) {
    const post = this.employeeRepo.findOne(id);

    if (post) {

      return post;
    }
    else {
      throw new HttpException("Post not found ", HttpStatus.NOT_FOUND);
    }
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
