import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Catalogueproduit } from 'src/app/models/Catalogueproduit.model';

const API_URL_Catalogueproduit = environment.API_URL+"/catalogueproduit"

@Injectable({
  providedIn: 'root'
})
export class CatalogueproduitService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Catalogueproduit[]>(API_URL_Catalogueproduit)
    
  }

  public save(catalogueproduit:Catalogueproduit){
    return this.http.post<Catalogueproduit>(API_URL_Catalogueproduit , catalogueproduit)
  }

  public findById(id:number){
    return this.http.get<Catalogueproduit>(`${API_URL_Catalogueproduit}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Catalogueproduit>(`${API_URL_Catalogueproduit}/${id}`)
  }
}
