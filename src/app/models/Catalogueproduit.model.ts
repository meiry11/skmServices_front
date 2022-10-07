import { Produit } from "./Produit.model";

export class Catalogueproduit{
    constructor(
        public  id_catlogueproduit:number,
        public  nombre_total:number,
        public  produits:Array<Produit>
    
    ){}
}