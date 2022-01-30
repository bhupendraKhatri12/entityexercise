import { Product } from "src/product/entities/product.entity"
import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, JoinTable,ManyToOne,OneToMany } from "typeorm"



@Entity("Image")
export class Image {

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  publicid:number
  
  @Column()
  url :string
  
  @OneToMany(()=>Product,product=>product.id)
  productid:Product[]

  @OneToMany(()=>Product,product=>product.createdAt)
  createdAt:Product[]


  @OneToMany(()=>Product,product=>product.updateAt)
  updatedAt:Product[]




}
