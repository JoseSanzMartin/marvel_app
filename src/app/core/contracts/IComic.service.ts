import { Observable } from "rxjs";
import { Comic, ComicApiResponse } from "../models/IComic";

export interface IComicService {
  getComics(): Observable<ComicApiResponse>;
  getComicById(id: number): Observable<ComicApiResponse>;
}
