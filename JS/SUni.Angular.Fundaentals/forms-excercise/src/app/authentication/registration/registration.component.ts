import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model:RegisterModel;
  registerFailed: boolean = false;
  errorMsg:string = '';

  constructor(private authService : AuthenticationService, private router: Router) {
    this.model = new RegisterModel('','','','','',0);
   }

  ngOnInit() {
  }

  register(){
    delete this.model['confirmPassword'];
    this.authService.register(this.model)
    .subscribe(data=>{
      this.router.navigate(['/login'])
    },
    err=>{
      //console.log(err);
      this.registerFailed=true;
      this.errorMsg = err.error.description
    })
    //console.log(JSON.stringify(this.model));
  }

}
