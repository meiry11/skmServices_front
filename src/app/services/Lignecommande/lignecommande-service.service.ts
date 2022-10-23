import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Lignecommande } from 'src/app/models/Lignecommande.model';
import { IdLignecommande } from 'src/app/models/IdLignecommande.model';

const API_URL_LigneCommande = environment.API_URL+"/lignecommande"

@Injectable({
  providedIn: 'root'
})
export class LignecommandeService{

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Lignecommande[]>(API_URL_LigneCommande)
    
  }

  public save(lignecommande:Lignecommande){
    return this.http.post<Lignecommande>(API_URL_LigneCommande , lignecommande)
  }

  public findById(id:IdLignecommande){
    return this.http.get<Lignecommande>(`${API_URL_LigneCommande}/${id}`)
  }

  public delete(id:IdLignecommande){
    return this.http.delete<Lignecommande>(`${API_URL_LigneCommande}/${id}`)
  }
}
