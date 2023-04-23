import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Comic } from "src/app/core/models/IComic";
import { ComicService } from "src/app/features/services/comic.service";

@Component({
  selector: "app-comic-detail",
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.scss"],
})
export class ComicDetailComponent implements OnInit {
  comicSelected: Comic | null = null;

  constructor(
    private comicService: ComicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.comicService.getComicById(parseInt(id, 10)).subscribe((response) => {
        this.comicSelected = response.data.results[0];
      });
    }
  }
}
