import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Catalogueemballage } from 'src/app/models/Catalogueemballage.model';

const API_URL_CatalogueEmballage = environment.API_URL+"/catalogueemballage"

@Injectable({
  providedIn: 'root'
})
export class CatalogueemballageService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Catalogueemballage[]>(API_URL_CatalogueEmballage)
    
  }

  public save(catalogueemballage:Catalogueemballage){
    return this.http.post<Catalogueemballage>(API_URL_CatalogueEmballage , catalogueemballage)
  }

  public findById(id:number){
    return this.http.get<Catalogueemballage>(`${API_URL_CatalogueEmballage}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Catalogueemballage>(`${API_URL_CatalogueEmballage}/${id}`)
  }
}
