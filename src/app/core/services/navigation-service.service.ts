import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public history: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe( event => {

      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  back(): void {

    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
      this.history.pop();
    } else {
      this.router.navigateByUrl("/");
    }

    console.log(this.location);
  }

  public backHistory(): string {

    if(this.history.length > 0){
    return this.history[this.history.length - 2];}
    else {
      return '';
    }
  }
}
