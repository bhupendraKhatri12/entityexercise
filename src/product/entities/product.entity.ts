import  {PrimaryGeneratedColumn,Entity,Column} from "typeorm"
import  {}

@Entity("Product")
export class Product {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    skuNumber:number

    @Column()
    brandid:number

   @Column()
   countryOfOrigin:string


  




}
