import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PhotoEntity } from './photo.entity';
@Entity("employee")
export class Employee extends PhotoEntity {

  @Column()
  name: string;

  @Column()
  salary: number;

  @Column()
  age: number;
}