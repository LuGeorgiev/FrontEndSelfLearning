import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  myMovie;
  constructor(private route:ActivatedRoute,
    private movieService:MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let id = params['id'];
      console.log(params);
      this.movieService.getMovie(id)
      .subscribe(data=>{
        console.log(data);
        this.myMovie = data;
      })
    })
  }

}
