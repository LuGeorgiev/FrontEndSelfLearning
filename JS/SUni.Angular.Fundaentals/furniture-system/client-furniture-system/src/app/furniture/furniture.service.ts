import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private readonly createF='https://localhost:44386/api/furniture/create';

  constructor(private http : HttpClient) { }

  createFurniture(data){
    return this.http.post(this.createF, data);
  }
}
