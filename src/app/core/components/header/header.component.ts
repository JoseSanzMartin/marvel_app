import { Component, OnInit } from "@angular/core";
import { CoreService } from "../../services/core.service";
import { Router } from "@angular/router";
import { Buttons } from "./Ibutton";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  buttons!: Buttons[];
  sectionsComic: string[] = [];
  sectionsCharacter: string[] = [];

  showComicContainer = false;
  showCharacterContainer = false;
  isHovering = false;

  constructor(private coreService: CoreService, private router: Router) {}

  ngOnInit(): void {
    this.buttons = this.coreService.getHeaderButtons();
    this.sectionsComic = this.coreService.getHeaderSections("comic");
    this.sectionsCharacter = this.coreService.getHeaderSections("character");
  }

  navigateToHome() {
    this.router.navigate(["/home"]);
  }

  goTo(url: string) {
    this.router.navigate(["/", url]);
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
    console.log(container);
    if (container == "comics") {
      this.showComicContainer = true;
    } else {
      this.showCharacterContainer = true;
    }
    this.isHovering = true;
  }

  toggleLeave(container: string) {
    if (container === 'comics') {
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

}

