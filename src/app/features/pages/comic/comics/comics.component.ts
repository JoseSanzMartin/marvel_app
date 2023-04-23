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

  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    this.comicService.getComics().subscribe((response) => {
      console.log(response);
      this.comics = response.data.results;
    });
  }
}
