import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Character } from "src/app/core/models/ICharacter";
import { CharacterService } from "src/app/features/services/character.service";

@Component({
  selector: "app-character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.scss"],
})
export class CharacterDetailComponent implements OnInit {
  charSelected: Character | null = null;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.characterService
        .getCharacterById(parseInt(id, 10))
        .subscribe((response) => {
          this.charSelected = response.data.results[0];
        });
    }
  }
}
