import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder, ) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]+$/)],[]],
      email : ['', [Validators.required, Validators.email],[]]
    })
  }

  register(){
    console.log(this.form);
  }

  get f(){
    return this.form.controls;
  }
}
