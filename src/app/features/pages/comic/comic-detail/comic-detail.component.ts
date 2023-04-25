import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, tap } from "rxjs";
import { Comic } from "src/app/core/models/IComic";
import { ComicService } from "src/app/features/services/comic.service";

@Component({
  selector: "app-comic-detail",
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.scss"],
})
export class ComicDetailComponent implements OnInit, OnDestroy {
  comicImage: Comic | null = null;
  comicTitle: Comic | null = null;

  constructor(
    private comicService: ComicService,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.comicImage = null;
    this.comicTitle = null;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      this.comicService
        .getComicById(parseInt(id, 10))
        .pipe(
          map((response) => {
            const comic  = {
              thumbnail : response.data.results[0].thumbnail,
              title : response.data.results[0].title,
              description : response.data.results[0].description,
              prices : response.data.results[0].prices
            };
            return comic;
          }))
        .subscribe((response) => {
          this.comicImage = { thumbnail: response.thumbnail, title: response.title } as Comic;
          this.comicTitle = { title: response.title, description: response.description, prices: response.prices } as Comic;
        });
    });
  }
}
