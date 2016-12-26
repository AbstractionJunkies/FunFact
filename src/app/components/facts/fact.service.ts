import { Injectable } from '@angular/core';

import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class FactService {

    private host: string = 'http://localhost:1337/';
    private commentSubject;

    constructor(private http: Http,
        private auth: AuthenticationService) {
        this.commentSubject = new Subject();
    }


    getAllFacts() {
        return this.http.get(`${this.host}facts/all`);
    }

    getFactById(id) {
        return this.http.get(`${this.host}facts/fact/${id}`);
    }

    getFactComments(factId) {
        return this.http.get(`${this.host}facts/fact/${factId}/comments`);
    }

    addComment(comment, factId) {
        let body = {
            comment
        };

        return this.http.post(`${this.host}facts/fact/${factId}/comments`, body);
    }

    rateFact(factId, value): Observable<any> {
        value = +value;
        if (typeof (value) === 'undefined' || !value) {

        }
        console.log(factId, value);
        let headers = this.auth.createAuthorizationHeader();
        let authToken = localStorage.getItem('auth_token');

        let body = {
            vote: value
        };

        let options = new RequestOptions({ headers: headers });
        console.log(headers);

        return this.http.put(`${this.host}facts/fact/${factId}`, JSON.stringify(body), { headers: headers })
            .map((res: Response) => {
                let body = res.json();
                console.log(body);
                return { status: res.status, body: body }
            })
    }

    setComment(comment) {
        this.commentSubject.next(comment);
    }

    getComment() {
        return this.commentSubject.asObservable();
    }

    addToFavorites(username, fact) {
        let body = {
            fact
        };

        return this.http.post(`${this.host}facts/user/${username}/favorites`, body);
    }
}
