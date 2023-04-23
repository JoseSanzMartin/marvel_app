import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Angular-material/material.module';
import { CharacterCardComponent } from './character-card/character-card.component';



@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CharacterCardComponent
  ]
})
export class SharedModule { }
