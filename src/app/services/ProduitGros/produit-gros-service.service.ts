import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProduitGros } from 'src/app/models/ProduitGros.model';

const API_URL_ProduitGros = environment.API_URL+"/produitgros"

@Injectable({
  providedIn: 'root'
})
export class ProduitGrosServiceService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<ProduitGros[]>(API_URL_ProduitGros)
    
  }

  public save(produitGros:ProduitGros){
    return this.http.post<ProduitGros>(API_URL_ProduitGros , produitGros)
  }

  public findById(id:number){
    return this.http.get<ProduitGros>(`${API_URL_ProduitGros}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<ProduitGros>(`${API_URL_ProduitGros}/${id}`)
  }
}
