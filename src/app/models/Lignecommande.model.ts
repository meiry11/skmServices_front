import { Emballage } from "./Emballage.model";
import { IdLignecommande } from "./IdLignecommande.model";
import { Produit } from "./Produit.model";

export class Lignecommande{
    constructor(
        private  id_lignecommande:IdLignecommande,
        private  lc_prixHT:number,
        private  lc_tva:number,
        private  lc_qte:number,
        private  emballage:Emballage,
        private  produit:Produit
    
    ){}
}