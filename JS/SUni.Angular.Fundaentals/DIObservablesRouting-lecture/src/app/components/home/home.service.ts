import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GitHubProfile } from './github-profile.model';

@Injectable()
export class HomeService {
    
    constructor(private httpClient:HttpClient){
    }

    getDate(){
        return "Hello from service";
    }

    gteGitHubProfile(profile:string){
        const url = `https://api.github.com/users/${profile}`

        return this.httpClient
             .get<GitHubProfile>(url);
    }
}