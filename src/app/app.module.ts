import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./core/components/home/home.component";
import { ComicsComponent } from "./features/pages/comics/comics.component";
import { CharactersComponent } from "./features/pages/characters/characters.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
