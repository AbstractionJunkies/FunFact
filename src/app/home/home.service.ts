import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../authentication/authentication.service";

const HomeUrl = 'http://localhost:1337/';

@Injectable()
export class HomeComponentService {

  constructor(private _http: Http, private auth: AuthenticationService) {

  }

  getHome(): Observable<any> {
    return this._http.get(HomeUrl)
      .map((res: Response) => {
        let body = res.json();
        return {status: res.status, body: body}
      })
  }

  voteYes(factId, vote: string): Observable<any> {
    let headers = this.auth.createAuthorizationHeader();
    let body = {
      vote: vote
    };
    return this._http.put(`${HomeUrl}facts/fact/vote/${factId}`, JSON.stringify(body), {headers: headers})
      .map((res: Response) => {
        let body = res.json();
        return {status: res.status, body: body}
      })
  }

  voteNo(factId, vote: string): Observable<any> {
    let headers = this.auth.createAuthorizationHeader();
    let body = {
      vote: vote
    };
    return this._http.put(`${HomeUrl}facts/fact/vote/${factId}`, JSON.stringify(body), {headers: headers})
      .map((res: Response) => {
        let body = res.json();
        return {status: res.status, body: body}
      })
  }
}
