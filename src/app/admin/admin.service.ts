import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../authentication/authentication.service";

const HomeUrl = 'http://localhost:1337/';

@Injectable()
export class AdminService {

    constructor(private _http: Http, private auth: AuthenticationService) {

    }

    getAllUserInfo(): Observable<any> {
        let headers = this.auth.createAuthorizationHeader();

        return this._http.get(`${HomeUrl}api/admin/users/all`, { headers: headers })
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            });
    }

}
