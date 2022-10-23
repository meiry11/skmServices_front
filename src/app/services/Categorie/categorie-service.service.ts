import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/app/models/Categorie.model';

const API_URL_Categorie = environment.API_URL+"/categorie"

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Categorie[]>(API_URL_Categorie)
    
  }

  public save(categorie:Categorie){
    return this.http.post<Categorie>(API_URL_Categorie , categorie)
  }

  public findById(id:number){
    return this.http.get<Categorie>(`${API_URL_Categorie}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Categorie>(`${API_URL_Categorie}/${id}`)
  }
}
