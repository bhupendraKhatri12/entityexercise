import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, JoinTable, ManyToOne, ManyToMany } from "typeorm"
import { Brand } from "../../brand/entities/brand.entity"
import { Category } from "../../category/entities/category.entity";
import { Tag } from "../../tag/entities/tag.entity";

@Entity("Product")
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skuNumber: number

    // one one relationship  in the situations 
    @OneToOne(() => Brand, brand => brand.id)
    brandid: Brand


    @Column()
    countryOfOrigin: string


    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    userid: number;


    @Column()
    categoriesId: Category[]

    @Column()
    abv: string

    @Column({ type: Date })
    createdAt: Date

    @Column({ type: Date })
    updateAt: Date

    @ManyToOne(() => Category, categories => categories.product)
    categories: Category

    @ManyToMany(()=>Tag, tags=>tags.products)
    @JoinTable()
    tags:Tag[]
}
