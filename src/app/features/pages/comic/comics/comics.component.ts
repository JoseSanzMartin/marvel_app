import { Component, OnInit } from "@angular/core";
import { Comic } from "src/app/core/models/IComic";
import { ComicService } from "src/app/features/services/comic.service";

@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["./comics.component.scss"],
})
export class ComicsComponent implements OnInit {
  comics: Comic[] = [];
  bestSellingComics: Comic[] = [];
  randomComics: Comic[] = [];
  bestSellingSlideIndex = 0;
  randomComicsSlideIndex = 0;
  displayedComics: number = 12;
  loadMoreStep: number = 12;
  showLoadMoreButton: boolean = true;

  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    this.comicService.getComics().subscribe((response) => {
      this.comics = response.data.results;
    });
    this.comicService.getBestSelling().subscribe((response) => {
      this.bestSellingComics = response.data.results;
    });

    this.comicService.getRandomComics().subscribe((response) => {
      this.randomComics = response.data.results;
    });
  }
  previousSlide(carousel: "bestSelling" | "randomComics"): void {
    if (carousel === "bestSelling") {
      if (this.bestSellingSlideIndex === 0) {
        this.bestSellingSlideIndex = this.bestSellingComics.length - 1;
      } else {
        this.bestSellingSlideIndex--;
      }
    } else {
      if (this.randomComicsSlideIndex === 0) {
        this.randomComicsSlideIndex = this.randomComics.length - 1;
      } else {
        this.randomComicsSlideIndex--;
      }
    }
  }

  nextSlide(carousel: "bestSelling" | "randomComics"): void {
    if (carousel === "bestSelling") {
      if (this.bestSellingSlideIndex === this.bestSellingComics.length - 1) {
        this.bestSellingSlideIndex = 0;
      } else {
        this.bestSellingSlideIndex++;
      }
    } else {
      if (this.randomComicsSlideIndex === this.randomComics.length - 1) {
        this.randomComicsSlideIndex = 0;
      } else {
        this.randomComicsSlideIndex++;
      }
    }
  }

  loadMoreComics() {
    this.displayedComics += this.loadMoreStep;
    if (this.displayedComics >= this.comics.length) {
      this.showLoadMoreButton = false;
    }
  }
}
