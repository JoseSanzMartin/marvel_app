import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { Comic } from "src/app/core/models/DTOComic";
import { ComicService } from "src/app/features/services/comic.service";

@Component({
  selector: "app-comic-detail",
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.scss"],
})
export class ComicDetailComponent implements OnInit {
  comicImage!: Comic;
  comicTitle! : Comic;

  constructor(
    private comicService: ComicService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      this.comicService
        .getComicById(parseInt(id, 10))
        .pipe(
          map((response) => {
            const comic = {
              thumbnail: response.data.results[0].thumbnail,
              title: response.data.results[0].title,
              description: response.data.results[0].description,
              prices: response.data.results[0].prices,
            };
            return comic;
          })
        )
        .subscribe((response) => {
          this.comicImage = {
            thumbnail: response.thumbnail,
            title: response.title,
          } as Comic;
          this.comicTitle = {
            title: response.title,
            description: response.description,
            prices: response.prices,
          } as Comic;
          console.log(this.comicTitle);
        });
    });
  }
}
