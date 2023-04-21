import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';


@NgModule({
  declarations: [
    CharacterDetailComponent,
    ComicDetailComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
