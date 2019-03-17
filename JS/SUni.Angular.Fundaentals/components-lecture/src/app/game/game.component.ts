import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games:Array<Game>;
  isShown:boolean = false;
  name_user:string = "Your name";

  constructor() { 
    this.games = [{id:1, title:"First Game", image:"https://irecommend.ru/sites/default/files/product-images/1809/RHPfyApsoWSy0VJlw9mrQ.jpg"},
    {id:2, title:"Second Game", image:"https://irecommend.ru/sites/default/files/product-images/1809/RHPfyApsoWSy0VJlw9mrQ.jpg"}]
  }
  notifyMe(notification:string){
    console.log(notification);
  }

  showContacts = ()=>{
    this.isShown = !this.isShown;
  }

  showName = (name) =>{
    this.name_user= name	;
    console.log(name);
  }

  ngOnInit() {
  }

}
