import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const createF='http://localhost:44386/api/furniture/create';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http : HttpClient) { }

  createFurniture(data){
    return this.http.post<>(createF, data);
  }
}
