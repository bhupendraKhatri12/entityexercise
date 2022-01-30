import { PrimaryGeneratedColumn, Entity, Column, OneToOne,ManyToMany, JoinColumn, JoinTable, OneToMany } from "typeorm"
import { Product } from "../../product/entities/product.entity"
import { Tag } from "../../tags/entities/tag.entity";

export class Category {


 @PrimaryGeneratedColumn()
 id :number;
    
    @ManyToMany(type=>Tag, tags=>tags.categories)
    @JoinTable()
    tags: Tag[];


    @Column()
    name: string

    @Column()
    country: string

    @Column()
    mpath: string

    @OneToMany(() => Product, product => product.categoriesId)
    product: Product
    
     @Column()
    parentCategoryId:number



}
