import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

const RegisterUrl: string = 'https://fun-fact-api.herokuapp.com/api/auth/register';
const LoginUrl: string = 'https://fun-fact-api.herokuapp.com/api/auth/login';
const GetLoggedUserUrl: string = 'https://fun-fact-api.herokuapp.com/api/auth/getLoggedUser';
const AuthToken: string = 'auth_token';

@Injectable()
export class AuthenticationService {

    public redirectUrl: string;
    public loggedIn = false;

    private hasAdminRole = false;
    private isUserBlocked = false;

    constructor(
        private _http: Http,
        private _router: Router) {
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
                console.log('boody', body);
                if (body.isUserBlocked) {
                    this.isUserBlocked = true;
                    return { status: res.status, body: body }
                }

                localStorage.setItem(AuthToken, token);
                this.loggedIn = true;
                return { status: res.status, body: body }
            });
    }

    logout() {
        localStorage.removeItem(AuthToken);
        this.loggedIn = false;
        this.hasAdminRole = false;
        this._router.navigate(['/home']);
    }

    isAdmin(): boolean {
        return this.hasAdminRole;
    }

    isBlocked(): boolean {
        return this.isUserBlocked;
    }

    isLoggedIn(): any {
        let token = localStorage.getItem(AuthToken);
        if (!token) {
            return false;
        }

        return this.varifyToken();

    }

    getLoggedUser(): Observable<any> {
        let headers = this.createAuthorizationHeader();
        let options = new RequestOptions({ headers: headers });

        return this._http.get(GetLoggedUserUrl, options)
            .map((res: Response) => {
                let status = res.status;
                let body = res.json();
                
                if (status === 401) {
                    this.loggedIn = false;
                    this.hasAdminRole = false;
                } else {
                    this.loggedIn = true;
                    if (body.roles.indexOf('admin') >= 0) {
                        this.hasAdminRole = true;
                    }
                }

                this.isUserBlocked = body.isBlocked;

                return { status: res.status, body: body };
            },
            (err: Response) => {
                this.loggedIn = false;
                this.hasAdminRole = false;
                console.log(err);
            });
    }

    varifyToken() {
        let headers = this.createAuthorizationHeader();
        let options = new RequestOptions({ headers: headers });

        return this._http.get(GetLoggedUserUrl, options)
            .map((res: Response) => {
                let status = res.status;
                let body = res.json();
                this.isUserBlocked = body.isBlocked;

                if (status !== 200) {
                    return false;
                } else {
                    return true;
                }
            },
            (err) => {
                return false;
            })

    }
    createAuthorizationHeader(): Headers {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let authToken = localStorage.getItem(AuthToken);

        headers.append('Authorization', authToken);

        return headers;
    }
}
