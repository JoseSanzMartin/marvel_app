import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharactersComponent } from "./pages/characters/characters.component";
import { ComicsComponent } from "./pages/comics/comics.component";
import { ComicDetailComponent } from "./pages/comic-detail/comic-detail.component";
import { CharacterDetailComponent } from "./pages/character-detail/character-detail.component";

const routes: Routes = [
  { path: "characters", component: CharactersComponent },
  { path: "comics", component: ComicsComponent },
  { path: "characters/:id", component: CharacterDetailComponent },
  { path: "comics/:id", component: ComicDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
