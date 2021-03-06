import { Injectable } from '@angular/core';
import { 
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable() export class TokenInterceptor implements HttpInterceptor{

    constructor(private router:Router) { } 

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        debugger;
        if (token) {
            debugger;
           req = req.clone({
               setHeaders:{
                   'Authorization':'Bearer' + 'token'
               }
           });
        }
        if (!req.headers.has('Content-type')) {
            debugger;
            req = req.clone({
                setHeaders:{
                    'content-type':'application/json'
                }
            });
        }
        req = req.clone({
            headers: req.headers.set('Accept','application/json')
        });

        return next.handle(req).pipe(
            map((event:HttpEvent<any>) => {
                if (event instanceof HttpResponse ) {
                    console.log('event-->', event);
                }
                return event;
            }),
            catchError((error:HttpErrorResponse) => {
                console.log(error);
                if (error.status === 400) {
                    alert(error.error);
                }
                return throwError(error);
            })
        );
    }

}