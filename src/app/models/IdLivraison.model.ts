import { Commande } from "./Commande.model";

export class IdLivraison{
    constructor(
        public  id_commande:Commande,
        public  livraison:number
    ){}
}