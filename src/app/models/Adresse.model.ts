import { Client } from "./Client.model";

export class Adresse{
    constructor(
        private  id_adresse:number,
        private  nom_rue:string,
        private  numero:number,
        private  code_postale:string,
        private  nom_ville:string,
        private  client:Client,

    ){}
}