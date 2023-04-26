import { Observable } from "rxjs";
import { ComicApiResponse } from "../models/DTOComicAPIResponse";

export interface IComicService {
  getComics(): Observable<ComicApiResponse>;
  getBestSelling(): Observable<ComicApiResponse>;
  getComicById(id: number): Observable<ComicApiResponse>;
  getRandomComics(): Observable<ComicApiResponse>;
}
