import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoreService{

  url = environment.baseUrl;
  buttons : string[] = ['characters', 'comics'];

  constructor(private http : HttpClient) { }

  getHeaderButtons(){
    return this.buttons;
  }

  getCharacters(){
    return this.http.get(`${this.url}characters`);
  }



}
