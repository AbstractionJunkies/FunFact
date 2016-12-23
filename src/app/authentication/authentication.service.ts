import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const RegisterUrl = 'http://localhost:1337/api/auth/register';
const LoginUrl = 'http://localhost:1337/api/auth/login';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

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
                return { status: res.status, body: res.json() }
            });
    }
}