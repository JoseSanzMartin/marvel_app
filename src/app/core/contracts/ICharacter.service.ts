import { Observable } from "rxjs";
import { CharacterApiResponse } from "src/app/core/models/DTOCharacterAPIResponse";

export interface ICharacterService {
  loadPage(
    offset: number,
    itemsPerPage: number
  ): Observable<CharacterApiResponse>;
  loadDescendPage(
    offset: number,
    itemsPerPage: number
  ): Observable<CharacterApiResponse>;
  getCharacterById(id: number): Observable<CharacterApiResponse>;
  getCharacterForHeader(): Observable<CharacterApiResponse>;
  searchCharacter(query: string): Observable<CharacterApiResponse>;
}
