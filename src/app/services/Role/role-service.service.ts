import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Role } from 'src/app/models/Role.model';

const API_URL_role = environment.API_URL+"/role"

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http:HttpClient) { }
  
  public findAll(){
    return this.http.get<Role[]>(API_URL_role)
    
  }

  public save(role:Role){
    return this.http.post<Role>(API_URL_role , role)
  }

  public findById(id:number){
    return this.http.get<Role>(`${API_URL_role}/${id}`)
  }

  public delete(id:number){
    return this.http.delete<Role>(`${API_URL_role}/${id}`)
  }
}
