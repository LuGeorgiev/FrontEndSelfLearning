import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';

const appKey = "kid_Byy56LLd4" // APP KEY HERE;
const appSecret = "c63a928e784e476b9e6e232fb4de7d2a" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthenticationService {
    private currentAuthToken: string;

    constructor(private http: HttpClient) {

    }
    private createAuthHeader(type: string) {
        if(type=="Basic"){
            return new HttpHeaders({
                'Authorization':`Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type':'application/json'
            })
        } else{
            return new HttpHeaders({
                'Authorization':`Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type':'application/json'
            })
        }
    }

    login(model:LoginModel){
        return this.http.post(
            loginUrl, 
            JSON.stringify(model),
            {
                headers:this.createAuthHeader('Basic')
            });
    }

    register(model:RegisterModel){
        return this.http.post(
            registerUrl,
            JSON.stringify(model),
            {
                headers:this.createAuthHeader('Basic')
            })
    }

    logout(){
        return this.http.post(
            logoutUrl,
            {},
            {
                headers: this.createAuthHeader('Kinvey')
            })
    }
    get authToken(){
         return this.currentAuthToken;
    }
    set authToken(value:string){
        this.currentAuthToken = value;
    }
    checkIfLogged(){
        return this.currentAuthToken===localStorage.getItem('authtoken');
    }
}