import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthenticationService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private authService: AuthenticationService, private router:Router){

  }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot) : boolean {
    return this.check();
  }

  check(){
    if(this.authService.checkIfLogged()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
