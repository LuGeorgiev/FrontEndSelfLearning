import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

const apiKey ='0c99f4cedb14df6e45e73d23b9827662';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    theatres:string = 'discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-02-02';
    kids:string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    drama:string = 'discover/movie?with_genres=18&primary_release_year=2018';
    movie :string = 'movie/'
    authentication:string = '&api_key=';
    movieAuthentication:string = '?api_key=';

    constructor(private httpClient:HttpClient){
    }

    gtePopular():Observable<Array<Movie>>{
       return this.httpClient
        .get<Array<Movie>>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
    }

    getInTeatres():Observable<Array<Movie>>{
        return this.httpClient
        .get<Array<Movie>>(`${this.path}${this.theatres}${this.authentication}${apiKey}`);
    }

    getKids():Observable<Array<Movie>>{
        return this.httpClient
        .get<Array<Movie>>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
    }

    getDramas():Observable<Array<Movie>>{
        return this.httpClient
        .get<Array<Movie>>(`${this.path}${this.drama}${this.authentication}${apiKey}`);
    }

    getMovie(id):Observable<Object>{
        return this.httpClient.get<Object>(`${this.path}${this.movie}${id}${this.movieAuthentication}${apiKey}`);
    }

    findAMovie(myQuery){
        return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?query=${myQuery}${this.authentication}${apiKey}`);
    }
}