import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, JoinTable,ManyToOne } from "typeorm"
import { Brand } from "../../brand/entities/brand.entity"
import { Category } from "src/category/entities/category.entity";

@Entity("Product")
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skuNumber: number

    // one one relationship  in the situations 
    @OneToOne((type) => Brand, brand => brand.id)
    brandid: Brand


    @Column()
    countryOfOrigin: string
     

    @Column()
    name: string;

    @Column()
    description:string;
     
    @Column()
    userid:number;
    

    @ManyToOne((type)=>Category,categories=> categories.id)
    categoriesId:Category[]

    @Column()
    abv:string

    @Column({type:Date})
     createdAt:Date

     @Column({type:Date})
     updateAt:Date

}
