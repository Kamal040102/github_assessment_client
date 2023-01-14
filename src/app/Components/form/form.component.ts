import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  username: string;
  privacyCheck: any;
  
  constructor(private router: Router){ 
  }

  ngOnInit(){}

  showResult(){
    this.username ? this.privacyCheck ? this.router.navigate(['/repos', this.username]) : window.alert("Check the terms and conditions.")  : window.alert("Username is a required input.")
  }
}
