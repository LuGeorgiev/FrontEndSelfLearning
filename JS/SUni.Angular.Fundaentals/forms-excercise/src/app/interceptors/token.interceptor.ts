import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/auth.service';
import { Router } from '@angular/router';

const appKey = "kid_Byy56LLd4" // APP KEY HERE;
const appSecret = "c63a928e784e476b9e6e232fb4de7d2a" // APP SECRET HERE;

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService, private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (req.url.endsWith('login') || req.url.endsWith(appKey)) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }

        return next.handle(req)
            .pipe(tap((event) => {
                if (event instanceof HttpResponse && req.url.endsWith('login')) {
                    this.successfulLogin(event['body'])
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                            this.router.navigate(['/login'])
                            break;
                        case 500:
                            this.router.navigate(['/server-error'])
                            break;
                        case 404:
                            this.router.navigate(['/not-found'])
                            break;
                        default:
                            break;
                    }
                }
            }
            ));
    }
    private successfulLogin(data) {
        this.authService.authToken = data['_kmd']['authtoken'];
        localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data['username']);
        this.router.navigate(['/home'])
    }
}
