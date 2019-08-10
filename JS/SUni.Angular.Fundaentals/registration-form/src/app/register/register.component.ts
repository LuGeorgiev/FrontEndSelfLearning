import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  phonePrefix: Array<string> = ["+971", "+359", "+972", "+198", "+701"];

  @ViewChild('form', {static:false}) 
  htmlForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  register(formData:FormData){
    console.log(formData);
  }

}
