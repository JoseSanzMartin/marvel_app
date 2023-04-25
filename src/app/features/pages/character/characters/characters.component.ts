/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CharacterService } from "src/app/features/services/character.service";
import { Component, OnInit } from "@angular/core";
import { Character } from "src/app/core/models/ICharacter";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Subject, debounceTime } from "rxjs";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();
  characters: Character[] = [];
  searchCharacters: Character[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 36;
  totalItems: number = 0;
  currentOrder: "asc" | "desc" = "asc";
  selected: "asc" | "desc" = "asc";

  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadPage(this.currentPage, this.itemsPerPage, this.currentOrder);
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.searchCharacter(value);
    });
  }

  searchData = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  onKeyPress() {
    this.debouncer.next(this.searchData.value.name as string);
  }

  searchCharacter(search: string): void {
    if (search != null && search != "") {
      this.characterService.searchCharacter(search).subscribe((response) => {
        this.searchCharacters = response.data.results;
        console.log(response.data.results);
      });
    } else {
      this.searchCharacters = [];
    }
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
