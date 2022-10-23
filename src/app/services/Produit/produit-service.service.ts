import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Produit } from 'src/app/models/Produit.model';

const API_URL_Produit = environment.API_URL+"/produit"

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Produit[]>(API_URL_Produit)
    
  }

  public save(produit:Produit){
    return this.http.post<Produit>(API_URL_Produit , produit)
  }

  public findById(id:number){
    return this.http.get<Produit>(`${API_URL_Produit}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Produit>(`${API_URL_Produit}/${id}`)
  }
}
