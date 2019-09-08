import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap }  from 'rxjs/operators';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService, private toastr: ToastrService){        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if(req.url.endsWith(`/user/${APP_KEY}`) || req.url.endsWith('login')){
            req = req.clone({
                setHeaders:{
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            req = req.clone({
                setHeaders:{
                    'Authorization': `Kinvey ${this.authService.token}`
                }
            });
        }

        return next.handle(req)
            .pipe(
                tap((event:HttpEvent<any>) => {
                    if(event instanceof HttpResponse && req.url.endsWith('login')){
                        this.toastr.success("Sucessfully registered", 'Success!');
                        this.authService.saveUserInfo(event.body);
                    }
                })
            );
    }

}