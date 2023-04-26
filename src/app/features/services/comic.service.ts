import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { ComicApiResponse } from "../../core/models/DTOComicAPIResponse";
import { IComicService } from "../../core/contracts/IComic.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComicService implements IComicService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getComics(): Observable<ComicApiResponse> {
    return this.http.get<ComicApiResponse>(
      `${this.url}comics?dateDescriptor=thisWeek&limit=20`
    );
  }

  getComicById(id: number): Observable<ComicApiResponse> {
    return this.http.get<ComicApiResponse>(`${this.url}comics/${id}`);
  }

  getBestSelling(): Observable<ComicApiResponse> {
    return this.http.get<ComicApiResponse>(
      `${this.url}comics?format=digital%20comic&orderBy=focDate&limit=20`
    );
  }

  getRandomComics(): Observable<ComicApiResponse> {
    return this.http.get<ComicApiResponse>(
      `${this.url}comics?dateDescriptor=thisMonth&limit=50`
    );
  }
}
