import { PrimaryGeneratedColumn, Entity, Column, OneToOne, ManyToMany, JoinColumn, JoinTable, OneToMany } from "typeorm"
import { Product } from "../../product/entities/product.entity"
import { Tag } from "../../tag/entities/tag.entity";

export class Category {


    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Tag, tags => tags.categories,{cascade:true})
    @JoinTable()
    tags: Tag[];


    @Column()
    name: string

    @Column()
    country: string

    @Column()
    mpath: string

    @OneToMany(() => Product, product => product.categories)
    product: Product[]

    @Column()
    parentCategoryId: number



}
