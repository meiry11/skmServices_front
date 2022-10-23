import { Client } from "./Client.model";
import { Facture } from "./Facture.model";
import { Lignecommande } from "./Lignecommande.model";
import { Livraison } from "./Livraison.model";

export class Commande{
    constructor(
    
    public id_commande:number,
    public date_commande:Date,
    public facture:Facture,
    public client:Client,
    public Lignecommande:Array<Lignecommande>,
    public livraison:Array<Livraison>
    ){}
}