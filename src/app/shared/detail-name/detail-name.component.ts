import { Component, Input } from "@angular/core";
import { Character } from "src/app/core/models/DTOCharacter";
import { Comic } from "src/app/core/models/DTOComic";

@Component({
  selector: "app-detail-name",
  templateUrl: "./detail-name.component.html",
  styleUrls: ["./detail-name.component.scss"],
})
export class DetailNameComponent {
  @Input() comic!  : Comic;
  @Input() character! : Character;
}
