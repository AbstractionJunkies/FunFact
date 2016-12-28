import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

const HomeUrl = 'http://localhost:1337/home';

@Injectable()
export class HomeComponentService {

  constructor(private _http: Http) {

  }

  getHome(): Observable<any> {
    return this._http.get(HomeUrl)
      .map((res: Response) => {
        let body = res.json();
        console.log(res.json());
        return {status: res.status, body: body}
      })
  }
}
