import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Angular-material/material.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ComicCardComponent } from './comic-card/comic-card.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    ComicCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CharacterCardComponent,
    ComicCardComponent
  ]
})
export class SharedModule { }
