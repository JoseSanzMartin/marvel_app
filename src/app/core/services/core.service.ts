import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay, map, of, tap } from 'rxjs';
import { environment } from "src/environments/environment.development";
import { CharacterApiResponse } from "../models/DTOCharacterAPIResponse";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  url = environment.baseUrl;
  callHeaderPhotos : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  buttons = [
    { name: "comics", isHidden: false },
    { name: "characters", isHidden: false },
  ];

  sectionsComic: string[] = [
    "release calendar",
    "marvel unlimited",
    "stormbreakers",
    "reading lists",
    "print subscriptions",
    "all comics",
  ];
  sectionsCharacter: string[] = [
    "all characters",
    "teams & groups",
    "explore all",
  ];

  constructor(private http: HttpClient, private router: Router) {}

  getHeaderButtons() {
    return this.buttons;
  }

  getHeaderSections(section: string): string[] {
    if (section == "character") {
      return this.sectionsCharacter;
    } else {
      return this.sectionsComic;
    }
  }

  getCharacters() {
    return this.http.get(`${this.url}characters`);
  }

  getCharacterLogin(ts: string, apikey: string, hash: string) {
    const paramsCall = new HttpParams()
      .set("ts", ts)
      .set("hash", hash)
      .set("apikey", apikey);

    return this.http
      .get<CharacterApiResponse>(`${this.url}characters?${paramsCall}`)
      .pipe(
        map((resp) => {
          return this.checkCall(resp.status);
        })
      )
      .pipe(
        tap(resp => {
          this.callHeaderPhotos.next(resp);
        })
      );
  }

  checkCall(resp: string): boolean {
    return resp == "Ok" ? true : false;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem("hash");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logOut(): void {
    localStorage.removeItem("hash");
    sessionStorage.removeItem("apikey");
    this.router.navigate(["/login"]);
  }
}
