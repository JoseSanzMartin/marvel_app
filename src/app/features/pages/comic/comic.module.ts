import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComicsComponent } from "./comics/comics.component";
import { ComicDetailComponent } from "./comic-detail/comic-detail.component";
import { ComicRoutingModule } from "./comic-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ComicsComponent, ComicDetailComponent],
  imports: [CommonModule, ComicRoutingModule, SharedModule],
})
export class ComicModule {}
