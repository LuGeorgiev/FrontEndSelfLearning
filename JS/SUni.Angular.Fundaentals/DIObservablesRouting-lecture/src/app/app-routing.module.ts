import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AuthenticatedRoute } from './shared/authenticated-route.service';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {
    path: 'about', 
    component: AboutComponent,
    canActivate:[AuthenticatedRoute]
  },
  {path: '', component:HomeComponent} //default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthenticatedRoute]
})
export class AppRoutingModule { }
