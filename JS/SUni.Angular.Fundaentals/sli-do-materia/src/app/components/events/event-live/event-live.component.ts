import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Question } from '../../shared/models/question-info.model';

@Component({
  selector: 'app-event-live',
  templateUrl: './event-live.component.html',
  styleUrls: ['./event-live.component.css']
})
export class EventLiveComponent implements OnInit {
  eventId:string;
  questions: Question[];

  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe((params:Params) =>{
      this.eventId = params['id'];
    })   
    
    this.eventService.fetchQuestionForEvent(this.eventId);
    
    this.eventService.liveEventQuestionsChanged
    .subscribe((data) => {
      this.questions = data;
    })

  }

}
