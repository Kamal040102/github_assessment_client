import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();

  private repoData = new BehaviorSubject<any>(null);
  public repoData$ = this.repoData.asObservable();

  private url = 'https://github-server.onrender.com/api/v1/github'
  constructor(private http: HttpClient) { }

  getUserDetail(user:any){
    return this.http.get(this.url + `?user=${user}`)
  }

  getUserRepoData(user:any){
    return this.http.get(this.url + "/repos" + `?user=${user}`)
  }

  setData(data:any) { 
    this.apiData.next(data)
  }

  setRepoData(data:any){
    this.repoData.next(data)
  }
}
