import { PartialType } from '@nestjs/mapped-types';

export class UpdatePostDto  {

    id:number;
    name:string ;
    age:number;
    salary:number;
}

export default UpdatePostDto;