import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const element = document.getElementById("animate");

    if (element) {
      element.addEventListener(
        "click",
        function (e) {
          e.preventDefault;
          element.classList.remove("run-animation");
          void element.offsetWidth;
          element.classList.add("run-animation");
        },
        false
      );
    }
  }
  goTo() {
    this.router.navigate(["/login"]);
  }
}
