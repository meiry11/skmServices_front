import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/models/Client.model';

const API_URL_Client = environment.API_URL+"/client"

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Client[]>(API_URL_Client)
    
  }

  public save(client:Client){
    return this.http.post<Client>(API_URL_Client , client)
  }

  public findById(id:number){
    return this.http.get<Client>(`${API_URL_Client}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Client>(`${API_URL_Client}/${id}`)
  }
}
