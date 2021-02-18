import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getMessage()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}