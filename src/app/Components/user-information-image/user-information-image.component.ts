import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-user-information-image',
  templateUrl: './user-information-image.component.html',
  styleUrls: ['./user-information-image.component.css']
})
export class UserInformationImageComponent implements OnInit {
  image_url: string;
  constructor(private githubService: GithubService){
    this.githubService.apiData$.subscribe(data => {
      this.image_url = data?.data.avatar_url
    })
  }

  ngOnInit(){

  }
}
