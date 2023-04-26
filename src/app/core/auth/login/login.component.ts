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
  apiKey: string = "";

  constructor(
    private fb: FormBuilder,
    private coreService: CoreService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    private: ["6b0662f26d337b15cb1d6361b7187c52a57c1505", Validators.required],
    public: ["963bb610e7f5f09a84186e125f680647", Validators.required],
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
