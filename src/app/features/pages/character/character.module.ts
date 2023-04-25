import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharacterRoutingModule } from "./character-routing.module";
import { CharactersComponent } from "./characters/characters.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CharactersComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CharacterModule {}
