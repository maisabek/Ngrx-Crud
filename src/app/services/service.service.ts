import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public apiUrl= environment.apiUrl;
  IsLoading:any=true;
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(`${this.apiUrl}/users`)
  }

  saveData(data:any){
    return this.http.post(`${this.apiUrl}/users`,data);
  }

  update(data:any,id:any){
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, data);
  }

  deleteItem(id:any){
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }

  getById(id: any){
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

}
