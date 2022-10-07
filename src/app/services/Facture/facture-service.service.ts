import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL_Adresse = environment.API_URL+"/facture"

@Injectable({
  providedIn: 'root'
})
export class FactureServiceService {

  constructor() { }
}
