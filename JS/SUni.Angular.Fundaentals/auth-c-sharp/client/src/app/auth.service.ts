import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44383/api/auth/';

  constructor(private http: HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post<any>(this.apiUrl + 'login',data)
      .pipe(
        tap(_ =>  this.log('login')),
        catchError(this.handleError('login',[]))
      );
  }

  register(data:any): Observable<any>{
    return this.http.post<any>(this.apiUrl + 'register', data)
      .pipe(
        tap(_ =>this.login('register'),
        catchError(this.handleError('register',[])))
      );
  }

  private handleError<T>(operation = 'operation', result?:T){
    return(error:any):Observable<T>=>{
      //Todosend error to remore loging inftastricture
      console.error(error); //temporary
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  /** Log mesage with service*/
  private log(message: string){
    console.log(message);
  }
}
