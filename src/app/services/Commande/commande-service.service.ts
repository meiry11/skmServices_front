import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Commande } from 'src/app/models/Commande.model';

const API_URL_Commande = environment.API_URL+"/commande"

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Commande[]>(API_URL_Commande)
    
  }

  public save(commande:Commande){
    return this.http.post<Commande>(API_URL_Commande , commande)
  }

  public findById(id:Commande){
    return this.http.get<Commande>(`${API_URL_Commande}/${id}`)
  }

  public delete(id:Commande){
    return this.http.delete<Commande>(`${API_URL_Commande}/${id}`)
  }
}
