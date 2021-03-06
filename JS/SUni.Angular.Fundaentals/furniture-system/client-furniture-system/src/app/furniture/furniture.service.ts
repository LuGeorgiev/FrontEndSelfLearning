import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../models/furniture';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private readonly createFur='https://localhost:44386/api/furniture/create';
  private readonly getAll='https://localhost:44386/api/furniture/all';
  private readonly getDetails ='https://localhost:44386/api/furniture/details/';
  private readonly getUserFur ='https://localhost:44386/api/furniture/mine';
  private readonly deleteFur ='https://localhost:44386/api/furniture/delete/';

  constructor(private http : HttpClient) { }

  createFurniture(data){
    return this.http.post(this.createFur, data);
  }

  getAllFurniture(): Observable<Array<Furniture>>{
    return  this.http.get<Array<Furniture>>(this.getAll);
  }

  getFurniture(id): Observable<Furniture>{
    return this.http.get<Furniture>(this.getDetails + id);
  }

  getUserFurniture(): Observable<Array<Furniture>>{
    return this.http.get<Array<Furniture>>(this.getUserFur);
  }

  deleteFurniture(id){
    return this.http.delete(this.deleteFur+id);    
  }
}
