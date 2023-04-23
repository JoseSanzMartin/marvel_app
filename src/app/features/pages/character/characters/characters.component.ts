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

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((response) => {
      console.log(response);
      this.characters = response.data.results;
    });
  }
}
