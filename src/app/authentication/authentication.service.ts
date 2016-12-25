import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

const RegisterUrl: string = 'http://localhost:1337/api/auth/register';
const LoginUrl: string = 'http://localhost:1337/api/auth/login';
const GetLoggedUserUrl: string = 'http://localhost:1337/api/auth/getLoggedUser';
const AuthToken: string = 'auth_token';

@Injectable()
export class AuthenticationService {

    private loggedIn = false;

    constructor(private _http: Http) {

    }

    register(userToRegister: Object): Observable<any> {
        return this._http.post(RegisterUrl, userToRegister)
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            });
    }

    login(userToLogin: Object): Observable<any> {
        return this._http.post(LoginUrl, userToLogin)
            .map((res: Response) => {
                let body = res.json();
                let token = body.token;
                
                localStorage.setItem(AuthToken, token);
                return { status: res.status, body: body }
            });
    }

    logout(): void {
        localStorage.removeItem(AuthToken);
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    getLoggedUser(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.createAuthorizationHeader(headers);

        return this._http.get(GetLoggedUserUrl, options)
            .map((res: Response) => {
                let body = res.json();
                return { status: res.status, body: body }
            })
    }

    createAuthorizationHeader(headers: Headers) {
        let authToken = localStorage.getItem(AuthToken);
        headers.append('Authorization', authToken);
    }
}