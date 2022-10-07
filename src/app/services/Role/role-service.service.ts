import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL_Adresse = environment.API_URL+"/role"

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor() { }
}
