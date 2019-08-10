import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  phonePrefix: Array<string> = ["+971", "+359", "+972", "+198", "+701"];

  constructor() { }

  ngOnInit() {
  }

  register(formData:FormData){
    console.log(formData);
  }

}
