import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';

@NgModule({
    imports:[
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    exports:[
        AngularFireAuthModule,
        AngularFireAuthModule
    ]
})
export class MyFirebaseModule{}