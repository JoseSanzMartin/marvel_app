import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { ComicApiResponse } from "../../core/models/IComic";
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
      `${this.url}comics?dateDescriptor=thisWeek&limit=12`
    );
  }

  getComicById(id: number): Observable<ComicApiResponse> {
    return this.http.get<ComicApiResponse>(`${this.url}comics/${id}`);
  }
}
