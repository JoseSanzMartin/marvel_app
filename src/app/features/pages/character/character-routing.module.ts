import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharactersComponent } from "./characters/characters.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";

const routes: Routes = [
  { path: "", component: CharactersComponent },
  { path: ":id", component: CharacterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}
