import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL_Adresse = environment.API_URL+"/catalogueproduit"

@Injectable({
  providedIn: 'root'
})
export class CatalogueproduitService {

  constructor() { }
}
