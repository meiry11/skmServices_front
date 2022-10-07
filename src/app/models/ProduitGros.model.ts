import { Produit } from "./Produit.model";

export class ProduitGros{
    constructor(
        public  id_produit_gros:number,
        public produit:Array<Produit> ,
        public  quantite:number
    ){}
}