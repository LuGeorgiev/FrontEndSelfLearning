import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FurnitureCreateComponent } from './furniture/furniture-create/furniture-create.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { FurnitureAllComponent } from './furniture/furniture-all/furniture-all.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './furniture/furniture-user/furniture-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'furniture/create', component: FurnitureCreateComponent, canActivate:[AuthGuard]},
  { path: 'furniture/all', component: FurnitureAllComponent, canActivate:[AuthGuard]},
  { path: 'furniture/details/:id', component: FurnitureDetailsComponent , canActivate:[AuthGuard]},
  { path: 'furniture/user', component: FurnitureUserComponent , canActivate:[AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }