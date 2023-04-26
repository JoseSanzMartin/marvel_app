import { Component, Input } from "@angular/core";
import { Character } from "src/app/core/models/DTOCharacter";
import { Comic } from "src/app/core/models/DTOComic";

@Component({
  selector: "app-detail-image",
  templateUrl: "./detail-image.component.html",
  styleUrls: ["./detail-image.component.scss"],
})
export class DetailImageComponent {
  @Input() imageCo: Comic | null = null;
  @Input() imageC: Character | null = null;
}
