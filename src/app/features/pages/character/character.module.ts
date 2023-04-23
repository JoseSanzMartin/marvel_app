import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharacterRoutingModule } from "./character-routing.module";
import { CharactersComponent } from "./characters/characters.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CharactersComponent, CharacterDetailComponent],
  imports: [CommonModule, CharacterRoutingModule, SharedModule],
})
export class CharacterModule {}
