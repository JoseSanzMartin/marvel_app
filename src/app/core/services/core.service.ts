import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoreService{

  url = environment.baseUrl;

  constructor(private http : HttpClient) { }

  getCharacters(){
    return this.http.get(`${this.url}characters`);
  }


}