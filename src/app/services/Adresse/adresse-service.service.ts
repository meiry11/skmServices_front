import { Injectable } from '@angular/core';
import { Adresse } from 'src/app/models/Adresse.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL_Adresse = environment.API_URL+"/adresse"

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http:HttpClient) { }
  
  public getAdresses(){
    return this.http.get<Adresse[]>(API_URL_Adresse)
    
  }

  public save(newAdresse:Adresse){
    return this.http.post<Adresse>(API_URL_Adresse , newAdresse)
  }
}
