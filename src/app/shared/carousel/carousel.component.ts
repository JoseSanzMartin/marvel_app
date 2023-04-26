import { Component, Input } from "@angular/core";
import { Comic } from "src/app/core/models/DTOComic";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent {
  @Input() comicList: Comic[] = [];
  carouselComicsSlideIndex = 0;

  previousSlide(): void {
    if (this.carouselComicsSlideIndex === 0) {
      this.carouselComicsSlideIndex = this.comicList.length - 1;
    } else {
      this.carouselComicsSlideIndex--;
    }
  }

  nextSlide(): void {
    if (this.carouselComicsSlideIndex === this.comicList.length - 1) {
      this.carouselComicsSlideIndex = 0;
    } else {
      this.carouselComicsSlideIndex++;
    }
  }
}
