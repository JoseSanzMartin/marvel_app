import {  Component } from "@angular/core";
import { SpinnerService } from "../service/spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent {

  isloading$!: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.isLoading$.subscribe((resp) => {
      this.isloading$ = resp;
    });
  }


}
