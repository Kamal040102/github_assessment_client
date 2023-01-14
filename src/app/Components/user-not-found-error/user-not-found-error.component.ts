import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-not-found-error',
  templateUrl: './user-not-found-error.component.html',
  styleUrls: ['./user-not-found-error.component.css']
})
export class UserNotFoundErrorComponent {
  constructor(private router: Router){}

  goToHome(){
    this.router.navigate(["/"])
  }
}
