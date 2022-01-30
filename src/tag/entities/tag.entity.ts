import { Product } from "../../product/entities/product.entity";
import { PrimaryGeneratedColumn, ManyToMany, Entity, Column, OneToOne, JoinColumn, JoinTable, OneToMany, ManyToOne } from "typeorm"
import { Category } from "../../category/entities/category.entity";


@Entity("Tag")
export class Tag {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column({ type: Date })
    createAt: Date

    @Column({ type: Date })
    updatedAt: Date

    @Column()
    userid: number

    @ManyToMany(() => Category, category => category.tags)
    categories: Category[]

    @ManyToMany(()=>Product, products=>products.tags)
    products:Product[]



}