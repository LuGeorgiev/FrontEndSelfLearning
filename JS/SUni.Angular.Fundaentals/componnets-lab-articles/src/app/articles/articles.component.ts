import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor() {
    // this.articles= [{title:"A",imageUrl:"NO",description:"longg",author:"Ivan"}
    // ,{title:"A",imageUrl:"NO",description:"longg",author:"Ivan"}]
  }

  ngOnInit() {
    this.articles = new ArticleData().getData();
    console.log(this.articles);
  }

}
