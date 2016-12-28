import { Injectable } from '@angular/core';

import { Http } from '@angular/http';


@Injectable()
export class UserService {

    private host: string = 'http://localhost:1337/';

    constructor(private http: Http) { }

    getUserFavorites(username) {
        return this.http.get(`${this.host}facts/user/${username}/favorites`);
    }

    getUserAvatar(username){
        return this.http.get(`${this.host}facts/user/${username}/avatar`);
    }
}
