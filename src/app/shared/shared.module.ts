import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Angular-material/material.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    ComicCardComponent,
    BackButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CharacterCardComponent,
    ComicCardComponent,
    BackButtonComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
