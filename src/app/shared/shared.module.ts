import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Angular-material/material.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { BackButtonComponent } from './back-button/back-button.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    ComicCardComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CharacterCardComponent,
    ComicCardComponent,
    BackButtonComponent
  ]
})
export class SharedModule { }
