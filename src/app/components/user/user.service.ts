import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { AuthenticationService } from '../../authentication/authentication.service';

import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService {

    private host: string = 'http://localhost:1337/';
    private avatarSubject: Subject<any>;

    constructor(
        private http: Http,
        private auth: AuthenticationService
    ) {
        this.avatarSubject = new Subject();

    }

    getUserFavorites(username) {
        let headers = this.auth.createAuthorizationHeader();

        return this.http.get(`${this.host}facts/user/${username}/favorites`, { headers: headers });
    }

    getUserAvatar(username) {
        let headers = this.auth.createAuthorizationHeader();

        return this.http.get(`${this.host}facts/user/${username}/avatar`, { headers: headers });
    }

    setAvatar(avatar) {
        this.avatarSubject.next(avatar);
    }

    getAvatar() {
        return this.avatarSubject.asObservable();
    }
}
