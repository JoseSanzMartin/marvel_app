import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttons : string[] = [];
  isHidden = false;

  constructor(private coreService : CoreService, private router : Router) { }

  ngOnInit(): void {
    this.buttons = this.coreService.getHeaderButtons();
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  goTo(url : string){

    this.router.navigate(['/',url]);
  }

}
