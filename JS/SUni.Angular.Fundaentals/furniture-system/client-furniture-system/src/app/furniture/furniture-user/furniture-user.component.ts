import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Furniture } from 'src/app/models/furniture';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {

  furniture$:Observable<Array<Furniture>>

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getUserFurniture();
  }

  deleteFurniture(id){
    this.furnitureService.deleteFurniture(id).subscribe((data)=>{
      console.log('delete ', data);
      this.furniture$ = this.furnitureService.getUserFurniture(); 
    });
  }

}
