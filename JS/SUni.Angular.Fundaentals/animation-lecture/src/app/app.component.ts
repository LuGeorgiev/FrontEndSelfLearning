import { Component } from '@angular/core';
import {appAnimations} from './animations/app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: appAnimations
})
export class AppComponent {
  state = "normal";
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread']

  onAdd(item){
    this.list.push(item);
  }

  onDelete(item){
    this.list.splice(this.list.indexOf(item),1);
  }

  onAnimate(){
    this.state ==='normal' 
    ? this.state='high'
    : this.state = 'normal';

    this.wildState ==='normal' 
    ? this.wildState='high'
    : this.wildState = 'normal'
  }

  onShrink(){
    this.wildState="shrunken";
  }
  animationStart(event){
    console.log(event);
  }
  animationEnd(event){
    console.log(event);
  }

}
