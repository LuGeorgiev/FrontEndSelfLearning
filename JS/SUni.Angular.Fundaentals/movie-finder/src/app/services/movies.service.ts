import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

const apiKey ='0c99f4cedb14df6e45e73d23b9827662';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    theatres:string = 'discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-02-02';
    authentication:string = '&api_key=';

    constructor(private httpClient:HttpClient){
    }
    gtePopular():Observable<Movies>{
       return this.httpClient
        .get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
    }
    getInTeatres():Observable<Movies>{
        return this.httpClient
        .get<Movies>(`${this.path}${this.theatres}${this.authentication}${apiKey}`);
    }
}