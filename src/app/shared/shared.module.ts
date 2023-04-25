import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./Angular-material/material.module";
import { CharacterCardComponent } from "./character-card/character-card.component";
import { ComicCardComponent } from "./comic-card/comic-card.component";
import { BackButtonComponent } from "./back-button/back-button.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { CarouselComponent } from "./carousel/carousel.component";

@NgModule({
  declarations: [
    CharacterCardComponent,
    ComicCardComponent,
    BackButtonComponent,
    SpinnerComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    CharacterCardComponent,
    ComicCardComponent,
    BackButtonComponent,
    SpinnerComponent,
    CarouselComponent,
  ],
})
export class SharedModule {}
