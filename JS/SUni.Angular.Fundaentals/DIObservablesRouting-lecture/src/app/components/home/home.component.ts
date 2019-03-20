import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { GitHubProfile } from './github-profile.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  someData: string;
  profile:GitHubProfile;

  constructor(
    private homeService: HomeService) {
    this.someData = homeService.getDate();
    
  }

  ngOnInit() {
    console.log(this.someData);
    this.homeService
      .gteGitHubProfile('lugeorgiev')
      .subscribe(data=> this.profile=data);
  }
}
