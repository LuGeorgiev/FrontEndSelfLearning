import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: HomeComponent},
  {path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
