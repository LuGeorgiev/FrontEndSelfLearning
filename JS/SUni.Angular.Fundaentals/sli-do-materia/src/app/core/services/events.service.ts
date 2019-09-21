import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { SlidoLiveEvent } from 'src/app/components/shared/models/live-event.model';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Question } from 'src/app/components/shared/models/question-info.model';

@Injectable({
    providedIn:'root'
})
export class EventService {
    private _liveEvent: SlidoLiveEvent;
    private _liveEventQuestions : Question [] = [];

    liveEventChaged = new Subject<SlidoLiveEvent>();
    liveEventQuestionsChanged = new Subject<Question[]>();

    constructor(private afDb: AngularFirestore, 
        private snackBar: MatSnackBar,
        private router: Router){
    }

    fetxhEventByCode(eventCode:string){
        this.afDb.collection<SlidoLiveEvent>('events', (ref) => ref.where('code', '==', eventCode))
        .snapshotChanges()
        .pipe(
            map(docArray=>{
                return docArray.map(e => {
                    return {
                        id: e.payload.doc.id,
                        ...e.payload.doc.data()
                    }
                })
            })
        )
        .subscribe((data) => {
            if(data.length > 0){
                this._liveEvent = data[0];
                this.liveEventChaged.next({...this._liveEvent});
                this.router.navigate(['/event', this._liveEvent.id, 'live'])
                //open live event
            } else {
                this.snackBar.open(`No ${eventCode} event found!`, 'X', {
                    duration: 4000,
                    horizontalPosition : "right",
                    verticalPosition: "top"
                })
            }
        });
    }

    fetchQuestionForEvent(eventId: string){
        this.afDb.collection<Question>('questions', (ref)=> ref.where('eventId', '==', eventId))
        .valueChanges()
        .subscribe((questions) => {
            this._liveEventQuestions = questions;
            this.liveEventQuestionsChanged.next([...this._liveEventQuestions]);
            console.log(questions);
        })
    }

}