import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComicsComponent } from "./comics/comics.component";
import { ComicDetailComponent } from "./comic-detail/comic-detail.component";
import { ComicRoutingModule } from "./comic-routing.module";

@NgModule({
  declarations: [ComicsComponent, ComicDetailComponent],
  imports: [CommonModule, ComicRoutingModule],
})
export class ComicModule {}
