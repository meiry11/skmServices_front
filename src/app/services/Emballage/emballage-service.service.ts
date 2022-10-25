import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Emballage } from 'src/app/models/Emballage.model';

const API_URL_Emballage = environment.API_URL+"/emballage"

@Injectable({
  providedIn: 'root'
})
export class EmballageService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Emballage[]>(API_URL_Emballage)
    
  }

  public save(emballage:Emballage){
    return this.http.post<Emballage>(API_URL_Emballage , emballage)
  }

  public findById(id:number){
    return this.http.get<Emballage>(`${API_URL_Emballage}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Emballage>(`${API_URL_Emballage}/${id}`)
  }
}
