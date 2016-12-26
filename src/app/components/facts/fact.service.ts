import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FactService {

    private host: string = 'http://localhost:1337/';
    private commentSubject;

    constructor(private http: Http) {
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

    setComment(comment) {
        this.commentSubject.next(comment);
    }

    getComment() {
        return this.commentSubject.asObservable();
    }
}
