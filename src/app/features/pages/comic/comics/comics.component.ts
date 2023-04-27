import { Component, OnInit } from "@angular/core";
import { Comic } from "src/app/core/models/DTOComic";
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
  displayedComics: number = 12;
  loadMoreStep: number = 12;
  showLoadMoreButton: boolean = true;
  isLoading = true;
  loadedImagesCount = 0;

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

  loadMoreComics() {
    this.displayedComics += this.loadMoreStep;
    if (this.displayedComics >= this.comics.length) {
      this.showLoadMoreButton = false;
    }
  }

  onImageLoad() {
    this.loadedImagesCount++;
    if (this.loadedImagesCount === this.displayedComics) {
      this.isLoading = false;
    }
  }
}
