import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL_Adresse = environment.API_URL+"/livraison"

@Injectable({
  providedIn: 'root'
})
export class LivraisonServiceService {

  constructor() { }
}
