import { Component, Input } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-user-information-data',
  templateUrl: './user-information-data.component.html',
  styleUrls: ['./user-information-data.component.css']
})
export class UserInformationDataComponent {
  user_details = {
    name: "",
    bio: "",
    location: "",
    twitter: "",
    profile_url: ""
  }

  constructor(private githubService: GithubService){
    this.githubService.apiData$.subscribe(data => {
      console.log(data?.data)
      this.user_details.name = data?.data.name ? `${data.data.name} (${data.data.login})` : data?.data.login
      this.user_details.bio = data?.data.bio === null ? "No Bio" : data.data.bio
      this.user_details.location = data?.data.location === null ? "Unknown Location" : data.data.location
      this.user_details.twitter = data?.data.twitter_username === null ? "No Twitter Username" : `https://twitter.com/${data.data.twitter_username}`
      this.user_details.profile_url = data?.data.html_url

    })
  }
}
