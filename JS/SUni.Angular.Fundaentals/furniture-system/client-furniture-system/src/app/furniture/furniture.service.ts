import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../models/furniture';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private readonly createF='https://localhost:44386/api/furniture/create';
  private readonly getAll='https://localhost:44386/api/furniture/all';

  constructor(private http : HttpClient) { }

  createFurniture(data){
    return this.http.post(this.createF, data);
  }

  getAllFurniture(): Observable<Array<Furniture>>{
    debugger;
    return  this.http.get<Array<Furniture>>(this.getAll);
  }
}
