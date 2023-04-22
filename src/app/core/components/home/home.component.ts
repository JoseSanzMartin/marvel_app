import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

    const element  = document.getElementById("animate");


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
}
