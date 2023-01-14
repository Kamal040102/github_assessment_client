import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{
  username: string;
  userDetails: any;
  userRepo: any;

  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService, private router: Router, private githubService: GithubService){}

  ngOnInit(){
    this.spinner.show()
    this.username = String(this.route.snapshot.paramMap.get("username"))
    this.githubService.getUserDetail(this.username).subscribe((res)=>{
        this.userDetails = res;
        this.githubService.setData(res)
      
    },(error)=>{
      this.spinner.hide()
      this.router.navigate(["/user-not-found", this.username])
    })

    this.githubService.getUserRepoData(this.username).subscribe((res)=>{
      this.userRepo = res;
      this.githubService.setRepoData(res)
      this.spinner.hide()
    })
  }
}
