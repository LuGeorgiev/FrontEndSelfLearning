import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor{

  constructor (public toastr: ToastrService){
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   

    return next.handle(req)
      .pipe(tap((success) => {
        if(success instanceof HttpResponse){
          if(success.url.endsWith('login') 
              || success.url.endsWith('register') 
              || success.url.endsWith('create') 
              || success.url.includes('delete')){
                this.toastr.success('Success','Success');
          }
        }
        console.log('success', success)
      }), catchError((err) => {
        console.log('from interceptor', err);
        this.toastr.error(err.error.message,'Error');
        throw err;
      })
      )}

}