import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular :Object;
  theaters :Object;

  constructor(private moveiesService:MoviesService) { }

  ngOnInit() {
    this.moveiesService.gtePopular()
      .subscribe(data=>{
        this.popular = data;
      });

    this.moveiesService.getInTeatres()
      .subscribe(data=>{
        this.theaters = data;
      })
  }

}
