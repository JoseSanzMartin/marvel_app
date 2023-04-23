import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import {
  Character,
  CharacterApiResponse,
} from "src/app/core/models/ICharacter";
import { ICharacterService } from "../../core/contracts/ICharacter.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharacterService implements ICharacterService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCharacters(
    offset: number,
    itemsPerPage: number
  ): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(
      `${this.url}/characters?offset=${offset}&limit=${itemsPerPage}`
    );
  }

  getCharacterById(id: number): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(`${this.url}characters/${id}`);
  }
}
