import { Emballage } from "./Emballage.model";

export class Catalogueemballage{
    constructor(
        public  id_catalogueemballage:number,
        public  nombre_total:number,
        public  emballage:Array<Emballage>
    
    ){}
}