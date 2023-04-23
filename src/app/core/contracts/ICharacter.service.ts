import { Observable } from "rxjs";
import {
  Character,
  CharacterApiResponse,
} from "src/app/core/models/ICharacter";

export interface ICharacterService {
  getCharacters(): Observable<CharacterApiResponse>;
  getCharacterById(id: number): Observable<CharacterApiResponse>;
}
