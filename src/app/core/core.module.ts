import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./auth/login/login.component";

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
