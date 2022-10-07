import { Adresse } from "./Adresse.model";
import { Commande } from "./Commande.model";
import { Role } from "./Role.model";

export class Client{
    constructor(
        public id_nom: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public telephone: string,
        public dateCreation: Date,
        public numeroSiret: number,
        public motDePasse: string,
        public adresse: Array<Adresse>,
        public commande: Array<Commande>,
        public  role: Array<Role>

    ){}
}