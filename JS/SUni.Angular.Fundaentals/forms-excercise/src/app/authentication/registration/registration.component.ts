import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model:RegisterModel;

  constructor() {
    this.model = new RegisterModel('','','','','',0);
   }

  ngOnInit() {
  }

  register(){
    delete this.model['confirmPassword'];

    //console.log(JSON.stringify(this.model));
  }

}
