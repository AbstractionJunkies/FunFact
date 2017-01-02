import { Injectable } from '@angular/core';

import { Http, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from '../../authentication/authentication.service';

import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService {

    private host: string = 'https://fun-fact-api.herokuapp.com/';
    private avatarSubject: Subject<any>;

    constructor(
        private http: Http,
        private auth: AuthenticationService
    ) {
        this.avatarSubject = new Subject();
    }

    getUserFavorites(username) {
        let headers = this.auth.createAuthorizationHeader();

        return this.http.get(`${this.host}api/users/user/${username}/favorites`, { headers: headers });
    }

    setAvatar(avatar) {
        this.avatarSubject.next(avatar);
    }

    getAvatar() {
        return this.avatarSubject.asObservable();
    }

    loadAvatar() {
        let token = localStorage.getItem('auth_token');

        if (token) {
            this.auth.getLoggedUser()
                .subscribe(result => {
                    let username = result.body.username;
                    this.setAvatar(result.body.avatar);
                },
                (err) => {
                    console.log(err);
                });
        }
    }

    updateSettings(id, data) {
        let headers = this.auth.createAuthorizationHeader();

        return this.http.put(`${this.host}api/users/user/${id}/`, JSON.stringify(data), { headers: headers })
            .map((res: Response) => {
                return { status: res.status, body: res.json() };
            });
    }
}
