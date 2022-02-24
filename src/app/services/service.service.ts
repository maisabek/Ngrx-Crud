import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  saveData(data:any){
    return this.http.post('',data);
  }

  update(book:any){
    return this.http.post<any>('' + book.id, book);
  }

  deleteItem(id:any){
    return this.http.delete<any>('' + id);
  }

  getById(id: number){
    return this.http.get('' + id);
  }
}
