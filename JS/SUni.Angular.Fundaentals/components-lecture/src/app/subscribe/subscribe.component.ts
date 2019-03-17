import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  @Input('subGame') subGame: Game;
  @Output() notification = new EventEmitter<string>();

  constructor() { }

  showSubscription = () => {
    console.log(`Sigbscription to gema id: ${this.subGame.id} was initiated`);
    this.notification.emit('Sucessully subscribed')
  }

  ngOnInit() {
  }

}
