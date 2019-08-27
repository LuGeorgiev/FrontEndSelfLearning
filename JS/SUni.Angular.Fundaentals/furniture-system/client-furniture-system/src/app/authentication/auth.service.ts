import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  //default endpoints for provided back-end solution
  // private readonly loginUrl = 'http://localhost:5000/auth/login';
  // private readonly registerUrl = 'http://localhost:5000/auth/register';

  private readonly loginUrl = 'https://localhost:44386/api/auth/login';
  private readonly registerUrl = 'https://localhost:44386/api/auth/register';

  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
}