import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-page-not-found-error',
  templateUrl: './page-not-found-error.component.html',
  styleUrls: ['./page-not-found-error.component.css']
})
export class PageNotFoundErrorComponent {
  constructor(private router: Router){}

  goToHome(){
    this.router.navigate(['/'])
  }
}
