import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, JoinTable, OneToMany } from "typeorm";
import { Product } from "../../product/entities/product.entity";
@Entity("Brand")
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    country: string


    @OneToMany((type) => Product, product => product.brandid)
    product: Product


}
