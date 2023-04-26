import { NgModule, inject } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/components/home/home.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },

  {
    path: "characters",
    canActivate: [() => inject(AuthGuard).canActivate()],
    loadChildren: () =>
      import("./features/pages/character/character.module").then(
        (m) => m.CharacterModule
      ),
  },
  {
    path: "comics",
    canActivate: [() => inject(AuthGuard).canActivate()],
    loadChildren: () =>
      import("./features/pages/comic/comic.module").then((m) => m.ComicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
