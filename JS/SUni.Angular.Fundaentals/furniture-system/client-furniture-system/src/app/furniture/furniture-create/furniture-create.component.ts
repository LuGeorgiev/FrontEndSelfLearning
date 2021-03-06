import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FurnitureService } from '../furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-create',
  templateUrl: './furniture-create.component.html',
  styleUrls: ['./furniture-create.component.css']
})
export class FurnitureCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private furnitureService: FurnitureService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      make:['', [Validators.required, Validators.minLength(4)]],
      model:['', [Validators.required, Validators.minLength(4)]],
      year: ['',[Validators.min(1950),Validators.max(2050), Validators.required]],
      description:['',[Validators.required, Validators.minLength(10)]], 
      price: ['',[Validators.required, Validators.min(1)]],
      imgUrl: ['',Validators.required],
      material:['', Validators.nullValidator]
    })
  }

  createFurniture(){
    // console.log(this.form);
    this.furnitureService.createFurniture(this.form.value).subscribe((data)=>{
      this.router.navigate(["furniture/all"])
    })
  }

  get f(){
    return this.form.controls;
  }

  get invalid(){
    return this.form.invalid
  }
}
