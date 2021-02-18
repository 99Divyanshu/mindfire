import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonDTO } from '../common/types/commonDTO';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getMessage():Observable<CommonDTO[]>
  {
    return this.http.get<CommonDTO[]>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
