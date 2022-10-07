import { Commande } from "./Commande.model";

export class Facture{
    constructor(
        public  id_facture:number,
        public  nom_facture:String,
        public  date_facture:Date,
        public  commande:Commande
    ){}
}