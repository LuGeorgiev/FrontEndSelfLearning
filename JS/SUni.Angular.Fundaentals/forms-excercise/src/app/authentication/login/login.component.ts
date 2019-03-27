import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: LoginModel;
loginFailed :boolean = false;
erorMsg:string = '';

  constructor(private authService: AuthenticationService, private router:Router) { 
    this.model = new LoginModel('','');
  }

  ngOnInit() {
  }
  
  login(){
    this.authService.login(this.model)
    .subscribe(data=>{
      console.log(data);
      //this.successfulLogin(data) 
    },
    err=>{
      this.loginFailed=true;
      this.erorMsg = err['error']['description']
    })
  }

  // successfulLogin(data){      //MOVED TO INTERCEPTOR
  //   this.authService.authToken = data['_kmd']['authtoken'];
  //   localStorage.setItem('authtoken',data['_kmd']['authtoken']);
  //   localStorage.setItem('username',data['username']);
  //   this.router.navigate(['/home'])
  // }
}
