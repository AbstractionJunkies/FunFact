import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { AuthenticationService } from '../../authentication/authentication.service';


@Injectable()
export class UserService {

    private host: string = 'http://localhost:1337/';

    constructor(private http: Http,
        private auth: AuthenticationService) { }

    getUserFavorites(username) {
        let headers = this.auth.createAuthorizationHeader();

        return this.http.get(`${this.host}facts/user/${username}/favorites`, { headers: headers });
    }

    getUserAvatar(username) {
        let headers = this.auth.createAuthorizationHeader();

        return this.http.get(`${this.host}facts/user/${username}/avatar`, { headers: headers });
    }
}
