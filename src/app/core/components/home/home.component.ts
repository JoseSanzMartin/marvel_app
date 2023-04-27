import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { CoreService } from "../../services/core.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private core: CoreService
  ) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement.querySelector("#animate");

    if (element) {
      this.renderer.listen(element, "click", () => {
        element.classList.remove("run-animation");
        void element.offsetWidth;
        element.classList.add("run-animation");
      });
    }
  }

  goTo(url: string) {
    this.router.navigate([`/${url}`]);
  }

  islogin() {
    return this.core.isLoggedIn();
  }
}
