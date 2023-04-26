import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment.development";
import { CharacterApiResponse } from "../models/DTOCharacterAPIResponse";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  url = environment.baseUrl;
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

  constructor(private http: HttpClient) {}

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
    return this.http
      .get<CharacterApiResponse>(`${this.url}characters${ts}${apikey}${hash}`)
      .pipe(
        map((resp) => {
          this.checkCall(resp.status);
        })
      );
  }

  checkCall(resp: string): boolean {
    return resp == "ok" ? true : false;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem("hash");
    return !!token;
  }
}
