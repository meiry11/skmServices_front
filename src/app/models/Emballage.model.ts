import { Catalogueemballage } from "./Catalogueemballage.model";
import { Lignecommande } from "./Lignecommande.model";

export class Emballage{
    constructor(
        private  id_emballage:number,
        private  nom_emballage:string,
        private  model_emballage:string,
        private  format_emballage:string,
        private  ligneCommande:Lignecommande,
        private  catalogueemballage:Catalogueemballage
    
    ){}
}