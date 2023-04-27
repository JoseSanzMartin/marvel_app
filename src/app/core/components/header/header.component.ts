import { Component, OnInit } from "@angular/core";
import { CoreService } from '../../services/core.service';
import { Router } from "@angular/router";
import { Buttons } from "../../models/DTOButton";
import { CharacterService } from "../../../features/services/character.service";
import { Character } from "../../models/DTOCharacter";
import { ComicService } from "src/app/features/services/comic.service";
import { Comic } from "../../models/DTOComic";
import { delay } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  buttons!: Buttons[];
  sectionsComic: string[] = [];
  sectionsCharacter: string[] = [];
  characters: Character[] = [];
  comics: Comic[] = [];

  showComicContainer = false;
  showCharacterContainer = false;
  isHovering = false;

  constructor(
    private coreService: CoreService,
    private router: Router,
    private charService: CharacterService,
    private comService: ComicService
  ) {}

  ngOnInit(): void {
    this.buttons = this.coreService.getHeaderButtons();
    this.sectionsComic = this.coreService.getHeaderSections("comic");
    this.sectionsCharacter = this.coreService.getHeaderSections("character");
    this.coreService.callHeaderPhotos.pipe(
      delay(200)
    ).subscribe((res) => {
     if(res){
        this.takeCharacters();
        this.takeComics();
     }
    });
  }

  navigateToHome() {
    this.router.navigate(["/home"]);
  }

  goTo(url: string) {
    this.router.navigate(["/", url]);
  }

  takeCharacters() {

    this.charService.getCharacterForHeader().subscribe((res) => {
      this.characters = res.data.results;
    });
  }

  takeComics() {

    this.comService.getComics().subscribe((res) => {
      this.comics = res.data.results;
    });
  }

  toggleContainer(name: string) {
    if (name == "comics") {
      this.showComicContainer = !this.showComicContainer;
      this.showCharacterContainer = false;
    } else {
      this.showCharacterContainer = !this.showCharacterContainer;
      this.showComicContainer = false;
    }
  }

  toggleHover(container: string) {
    if (container == "comics") {
      this.showComicContainer = true;
    } else {
      this.showCharacterContainer = true;
    }
    this.isHovering = true;
  }

  toggleLeave(container: string) {
    if (container === "comics") {
      setTimeout(() => {
        if (!this.showCharacterContainer) {
          this.showComicContainer = false;
        }
      }, 200);
    } else {
      setTimeout(() => {
        if (!this.showComicContainer) {
          this.showCharacterContainer = false;
        }
      }, 200);
    }
  }

  isLoggedIn() {
    return this.coreService.isLoggedIn();
  }

  logOut() {
    return this.coreService.logOut();
  }
}
