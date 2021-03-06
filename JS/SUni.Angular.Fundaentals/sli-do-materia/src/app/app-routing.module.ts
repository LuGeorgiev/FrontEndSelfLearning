import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { HomeComponent } from './components/home/home.component';
import { EventLiveComponent } from './components/events/event-live/event-live.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path: 'event/:id/live', component: EventLiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
