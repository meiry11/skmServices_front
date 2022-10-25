import { Catalogueproduit } from "./Catalogueproduit.model";
import { Categorie } from "./Categorie.model";
import { Lignecommande } from "./Lignecommande.model";
import { ProduitGros } from "./ProduitGros.model";

export class Produit{
    constructor(
        public id_produit:number,
        public nom_produit:String,
        public prixHT_produit:number,
        public stock_produit:number,
        public reference_produit:number,
        public description_produit:String,
        public image_produit:String,
        public date_creation_produit:Date,
        public date_peremption:Date,
        public ligneCommande:Lignecommande,
        public categorie:Categorie,
        public produitGros:ProduitGros,
        public catalogueproduit:Catalogueproduit

    ){}
}