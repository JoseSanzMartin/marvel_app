import { Observable } from "rxjs";
import {
  CharacterApiResponse,
} from "src/app/core/models/ICharacter";

export interface ICharacterService {
  getCharacters(
    offset: number,
    itemsPerPage: number
  ): Observable<CharacterApiResponse>;
  getCharacterById(id: number): Observable<CharacterApiResponse>;
  getCharacterForHeader(): Observable<CharacterApiResponse>;
}
