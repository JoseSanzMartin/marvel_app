import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CoreService } from "../services/core.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private coreService: CoreService, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.coreService.isLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
