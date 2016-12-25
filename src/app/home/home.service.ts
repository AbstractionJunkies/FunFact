import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const HomeUrl = 'http://localhost:1337/';

@Injectable()
export class HomeComponentService {

    constructor(private _http: Http) {

    }

    getHome(): Observable<any> {
        return this._http.get(HomeUrl)
            .map((res: Response) => res.json());
    }
}