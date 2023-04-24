import { AfterViewInit, Component } from "@angular/core";
import { SpinnerService } from "../service/spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements AfterViewInit {
  indice = 0;
  leave!: HTMLElement[];
  i = 0;
  stopLooping = true;

  interval: number | undefined;

  isloading$!: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.isLoading$.subscribe((resp) => {
      this.isloading$ = resp;
      if (!resp) {
        clearInterval(this.interval);
      }
    });
  }

  ngAfterViewInit(): void {
    this.leave = Array.from(document.querySelectorAll(".character"));
    this.interval = window.setInterval(() => {
      const outEl = this.leave.find((el) => el.classList.contains("out"));

      if (outEl?.nextElementSibling) {
        outEl.classList.remove("out");
        outEl.nextElementSibling.classList.add("out");
        this.setEnterClass(this.leave);
      } else {
        outEl?.classList.remove("out");
        this.leave[0].classList.add("out");
        this.setEnterClass(this.leave);
      }
    }, 500);
  }

  setEnterClass(leave: HTMLElement[]) {
    const enterEl = leave.find((el) => el.classList.contains("enter"));

    if (enterEl?.nextElementSibling) {
      enterEl.classList.remove("enter");
      enterEl.nextElementSibling.classList.add("enter");
    } else {
      enterEl?.classList.remove("enter");
      leave[0].classList.add("enter");
    }
  }

  ngOnDestroy(): void {
    console.log("eeeeee");
    clearInterval(this.interval);
  }
}
