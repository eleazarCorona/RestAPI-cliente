import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http: HttpClient) { }


  getApi(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }

}