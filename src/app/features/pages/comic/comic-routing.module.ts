import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicsComponent } from "./comics/comics.component";
import { ComicDetailComponent } from "./comic-detail/comic-detail.component";

const routes: Routes = [
  { path: "", component: ComicsComponent },
  { path: ":id", component: ComicDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicRoutingModule {}
