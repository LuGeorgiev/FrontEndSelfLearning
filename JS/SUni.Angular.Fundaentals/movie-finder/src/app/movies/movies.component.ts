import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Array<Movie>;
  theaters: Array<Movie>;
  kids: Array<Movie>;
  dramas: Array<Movie>;
  searchRes: any;
  isSearch: boolean = false;

  constructor(private moveiesService: MoviesService) { }

  search(myQuery) {
    this.moveiesService.findAMovie(myQuery.search)
      .subscribe((data) => {
        this.searchRes = data;
        if (this.searchRes.results.length>0) {          
          this.isSearch=true;
        }
      })
  }
  ngOnInit() {
    this.moveiesService.gtePopular()
      .subscribe(data => {
        this.popular = data;
      });

    this.moveiesService.getInTeatres()
      .subscribe(data => {
        this.theaters = data;
      })

    this.moveiesService.getDramas()
      .subscribe(data => {
        this.dramas = data;
      })

    this.moveiesService.getKids()
      .subscribe(data => {
        this.kids = data;
      })
  }

}
