import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Comic } from "src/app/core/models/DTOComic";

@Component({
  selector: "app-comic-card",
  templateUrl: "./comic-card.component.html",
  styleUrls: ["./comic-card.component.scss"],
})
export class ComicCardComponent {
  @Input() comic!: Comic;
  @Output() load: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {}

  onImageLoad() {
    this.load.emit();
  }

  navigateTo(id: number) {
    const url = id.toString();
    this.router.navigate(["comics", url]);
  }
}
