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
  currentOrder: "asc" | "desc" = "asc";

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadPage(this.currentPage, this.itemsPerPage, this.currentOrder);
  }

  loadPage(page: number, itemsPerPage: number, order: "asc" | "desc"): void {
    const offset = (page - 1) * itemsPerPage;
    if (order === "asc") {
      this.characterService
        .loadPage(offset, itemsPerPage)
        .subscribe((response) => {
          this.characters = response.data.results;
          this.totalItems = response.data.total;
        });
    } else {
      this.characterService
        .loadDescendPage(offset, itemsPerPage)
        .subscribe((response) => {
          this.characters = response.data.results;
          this.totalItems = response.data.total;
        });
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPage(page, this.itemsPerPage, this.currentOrder);
  }

  setOrder(order: "asc" | "desc"): void {
    this.currentOrder = order;
    this.loadPage(this.currentPage, this.itemsPerPage, order);
  }
}
