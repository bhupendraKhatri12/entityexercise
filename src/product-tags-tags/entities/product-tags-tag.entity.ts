import { Tag } from "src/tags/entities/tag.entity"
import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, JoinTable, OneToMany, ManyToOne } from "typeorm"

import  {Product} from "../../product/entities/product.entity"


@Entity('ProductTagsTag')
export class ProductTagsTag {


@OneToMany((type)=>Product,product =>product.id)
productid:Product[]


@OneToMany((type)=>Tag,product =>product.id)
tagsid:Tag[]



}
