import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class FactService {

    private host: string = 'http://localhost:1337/';

    constructor(private http: Http) { }

    getAllFacts() {
        return this.http.get(`${this.host}facts/all`);
    }

    getFactById(id) {
        return this.http.get(`${this.host}facts/fact/${id}`);
    }
}
