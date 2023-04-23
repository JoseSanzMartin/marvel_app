import { Component, OnInit } from "@angular/core";
import { Character } from "src/app/core/models/ICharacter";
import { CharacterService } from "src/app/features/services/character.service";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 36;
  totalItems: number = 0;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadPage(this.currentPage, this.itemsPerPage);
  }

  loadPage(page: number, itemsPerPage: number): void {
    const offset = (page - 1) * itemsPerPage;
    this.characterService
      .getCharacters(offset, itemsPerPage)
      .subscribe((response) => {
        this.characters = response.data.results;
        this.totalItems = response.data.total;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPage(page, this.itemsPerPage);
  }
}
