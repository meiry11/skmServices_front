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
  
  public findAll(){
    return this.http.get<Adresse[]>(API_URL_Adresse)
    
  }

  public save(adresse:Adresse){
    return this.http.post<Adresse>(API_URL_Adresse , adresse)
  }

  public findById(id:number){
    return this.http.get<Adresse>(`${API_URL_Adresse}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Adresse>(`${API_URL_Adresse}/${id}`)
  }

}
