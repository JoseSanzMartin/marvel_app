import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { CharacterApiResponse } from "src/app/core/models/ICharacter";
import { ICharacterService } from "../../core/contracts/ICharacter.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharacterService implements ICharacterService {
  url = environment.baseUrl;
  limitGenCall = 36;

  paramsHeader = new HttpParams().set("limit", 6).set("orderBy", "modified");

  constructor(private http: HttpClient) {}

  searchCharacter(query: string) {
    return this.http.get<CharacterApiResponse>(
      `${this.url}/characters?nameStartsWith=${query}`
    );
  }

  loadPage(
    offset: number,
    itemsPerPage: number
  ): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(
      `${this.url}/characters?offset=${offset}&limit=${itemsPerPage}`
    );
  }

  loadDescendPage(
    offset: number,
    itemsPerPage: number
  ): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(
      `${this.url}/characters?orderBy=-name&offset=${offset}&limit=${itemsPerPage}`
    );
  }

  getCharacterById(id: number): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(`${this.url}characters/${id}`);
  }

  getCharacterForHeader(): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(
      `${this.url}characters?${this.paramsHeader}`
    );
  }
}
