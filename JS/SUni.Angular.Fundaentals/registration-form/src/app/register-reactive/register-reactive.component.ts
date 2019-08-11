import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {
  form: FormGroup;
  phonePrefix: string[] = ["+359", "+789", "+100", "+897", "+345"];
  jobTitles: string[] = ["Designer", "Manager", "Junior Developer", "Senior Developer", "Application Architect", "Other"];


  constructor(private fb:FormBuilder, ) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/[A-Z][a-z]+\s[A-Z][a-z]+/)],[]],
      email: ['', [Validators.required, Validators.email],[]],
      image: ['',[Validators.required, Validators.pattern(/^(http:\/\/|https:\/\/)[a-zA-z\.0-9\/]+(.png|.jpg)$/)], [] ],
      prefix:['',[Validators.required],[]],
      phone:['', [Validators.pattern(/^[\d]{9}$/)],[]],
      jobTitle: ['', [Validators.required],[]],
      passwords: this.fb.group({
        password: ['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,16}$/)],[]],
        confirmedPasword: ['', [Validators.required],[]]
      },{validators: this.validatePasswordEquality})      
    })
  }

  register(){
    console.log(this.form);
  }

  validatePasswordEquality (group: FormGroup){
    const pass = group.controls['password'];
    const confirmPass = group.controls['confirmedPasword'];

    if (pass.value !== confirmPass.value) {
      confirmPass.setErrors({validatePasswordEquality:true});
    } else {
      confirmPass.setErrors(null);
    }
  }

  get f (){

    return this.form.controls;
  }
}
