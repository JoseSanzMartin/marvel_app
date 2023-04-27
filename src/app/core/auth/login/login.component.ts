import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { hash } from "src/app/core/utils/md5";
import { CoreService } from "../../services/core.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  hash = "";
  ts = "1";
  apiKey = "";

  constructor(
    private fb: FormBuilder,
    private coreService: CoreService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    private: ["8a86a22939ba7194486941d71013d571397602ad", [Validators.required, Validators.minLength(40)]],
    public: ["8705c48bfb960f02afebbce74ba690bb", [Validators.required, Validators.minLength(30)]],
  });


  login() {
    if (this.loginForm.valid) {
      this.hash = hash(
        `${this.ts}${this.loginForm.value.private}${this.loginForm.value.public}`
      );
      this.apiKey = this.loginForm.value.public as string;
      this.coreService
        .getCharacterLogin(this.ts, this.apiKey, this.hash)
        .subscribe((res) => {
          if (res) {
            localStorage.setItem("hash", this.hash);
            sessionStorage.setItem("apikey", this.apiKey);
          }
        });
      this.router.navigate(["home"]);
    }
  }
}
