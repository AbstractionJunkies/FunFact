import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const RegisterUrl = 'http://localhost:1337/api/auth/register';

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

    login(userToRegister: Object): Observable<any> {

        return;
    }
}