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
            return response.data.results[0];
          }),
          tap((response) => console.log(response))
        )
        .subscribe((response) => {
          this.comicImage = response;
          this.comicTitle = {
            title: response.title,
            description: response.description,
            thumbnail: response.thumbnail,
            prices : response.prices,
          } as Comic;
          console.log(this.comicImage);
        });
    });
  }
}
