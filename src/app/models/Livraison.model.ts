import { IdLivraison } from "./IdLivraison.model";

export class Livraison{
    constructor(
        public   id_livraison:IdLivraison,
        public  nom_livraison:String,
        public  choix_livraison:String
    
    ){}
}