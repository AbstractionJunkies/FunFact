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

    getAllFacts(page: number): Observable<any> {
        return this.http.get(`${this.host}facts/all?page=${page}`)
            .map((res: Response) => {
                let body = res.json();
                return { status: res.status, body: body }
            })
    }

    getFactById(id) {
        let headers = this.auth.createAuthorizationHeader();
        return this.http.get(`${this.host}facts/fact/${id}`, { headers: headers });
    }

    getFactComments(factId) {
        let headers = this.auth.createAuthorizationHeader();
        return this.http.get(`${this.host}facts/fact/${factId}/comments`, { headers: headers });
    }

    addComment(comment, factId) {
        let headers = this.auth.createAuthorizationHeader();

        let body = {
            comment
        };

        return this.http.post(`${this.host}facts/fact/${factId}/comments`, body, { headers: headers });
    }

    rateFact(factId, value): Observable<any> {
        value = +value;
        if (typeof (value) === 'undefined' || !value) {

        }
        let headers = this.auth.createAuthorizationHeader();

        let body = {
            vote: value
        };

        return this.http.put(`${this.host}facts/fact/${factId}`, JSON.stringify(body), { headers: headers })
            .map((res: Response) => {
                let body = res.json();
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
        let headers = this.auth.createAuthorizationHeader();

        let body = {
            fact
        };

        return this.http.post(`${this.host}facts/user/${username}/favorites`, body, { headers: headers });
    }

}
