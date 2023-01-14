import { Component } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-repo-section',
  templateUrl: './repo-section.component.html',
  styleUrls: ['./repo-section.component.css']
})

export class RepoSectionComponent {
  repos: any;
  constructor(private githubService: GithubService){
    this.githubService.repoData$.subscribe(data => {
      this.repos = data.data
      console.log(data.data)
    })
  }
}
