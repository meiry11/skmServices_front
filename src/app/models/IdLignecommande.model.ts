import { Commande } from "./Commande.model";

export class IdLignecommande{
    constructor(        
        public id_ligneCommande:number,
        public commande:Commande
    ){}
}