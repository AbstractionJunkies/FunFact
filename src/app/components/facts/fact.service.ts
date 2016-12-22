import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FactService {

    constructor(private http: Http) { }

    getAllFacts() {
        return this.http.get('http://localhost:1337/facts/all');
    }
}
