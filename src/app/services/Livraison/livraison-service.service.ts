import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IdLivraison } from 'src/app/models/IdLivraison.model';
import { Livraison } from 'src/app/models/Livraison.model';

const API_URL_Livraison = environment.API_URL+"/livraison"

@Injectable({
  providedIn: 'root'
})
export class LivraisonServiceService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Livraison[]>(API_URL_Livraison)
    
  }

  public save(livraison:Livraison){
    return this.http.post<Livraison>(API_URL_Livraison , livraison)
  }

  public findById(id:IdLivraison){
    return this.http.get<Livraison>(`${API_URL_Livraison}/${id}`)
  }

  public delete(id:IdLivraison){
    return this.http.delete<Livraison>(`${API_URL_Livraison}/${id}`)
  }
}
