import { Produit } from "./Produit.model";

export class Categorie{
    constructor(
        private  id_categorie:number,
        private  nom_categorie:string,
        private  produit:Array<Produit> 
    
    ){}
}