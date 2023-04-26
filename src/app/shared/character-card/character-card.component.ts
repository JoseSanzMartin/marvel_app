import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Character } from "src/app/core/models/DTOCharacter";

@Component({
  selector: "app-character-card",
  templateUrl: "./character-card.component.html",
  styleUrls: ["./character-card.component.scss"],
})
export class CharacterCardComponent {
  constructor(private router: Router) {}

  @Input() character!: Character;

  navigateTo(id: number) {
    const url = id.toString();
    this.router.navigate(["characters", url]);
  }
}
