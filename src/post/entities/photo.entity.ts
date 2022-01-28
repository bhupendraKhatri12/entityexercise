import { EntitySchema, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Employee } from "./post.entity";



export abstract class PhotoEntity {

    @PrimaryGeneratedColumn()
    id: number;




}



