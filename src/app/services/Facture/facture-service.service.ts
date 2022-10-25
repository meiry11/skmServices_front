import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Facture } from 'src/app/models/Facture.model';

const API_URL_Facture = environment.API_URL+"/facture"

@Injectable({
  providedIn: 'root'
})
export class FactureServiceService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Facture[]>(API_URL_Facture)
    
  }

  public save(facture:Facture){
    return this.http.post<Facture>(API_URL_Facture , facture)
  }

  public findById(id:number){
    return this.http.get<Facture>(`${API_URL_Facture}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Facture>(`${API_URL_Facture}/${id}`)
  }
}
