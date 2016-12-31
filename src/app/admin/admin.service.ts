import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../authentication/authentication.service";

const HomeUrl = 'http://localhost:1337/';

@Injectable()
export class AdminService {

    constructor(private _http: Http,
        private auth: AuthenticationService) { }

    getAllUserInfo(): Observable<any> {
        let headers = this.auth.createAuthorizationHeader();

        return this._http.get(`${HomeUrl}api/admin/users/all`, { headers: headers })
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            });
    }

    getDeletedFacts(): Observable<any> {
        let headers = this.auth.createAuthorizationHeader();

        return this._http.get(`${HomeUrl}api/admin/facts/deleted`, { headers: headers })
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            });
    }

    deleteFact(factId): Observable<any> {
        console.log(factId);
        let headers = this.auth.createAuthorizationHeader();
        let body = {
            factId
        }

        return this._http.delete(`${HomeUrl}api/admin/facts/fact/${factId}`, { headers: headers, body: body })
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            });
    }

    restoreDeletedFact(factId): Observable<any> {
        let headers = this.auth.createAuthorizationHeader();
        let body = {
            factId
        }

        return this._http.put(`${HomeUrl}api/admin/facts/fact/${factId}`, JSON.stringify(body), { headers: headers });
    }

    toggleBlockedUsers(userId): Observable<any> {
        let headers = this.auth.createAuthorizationHeader();

        return this._http.put(`${HomeUrl}api/admin/users/user/${userId}`, '', { headers: headers })
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            });
    }

    makeUserAdmin(userId): Observable<any> {
        let headers = this.auth.createAuthorizationHeader();

        return this._http.post(`${HomeUrl}api/admin/users/makeadmin/${userId}`, '', { headers: headers })
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            });
    }
}