import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthenticationService,
    private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('router');

    if (this._authService.isLoggedIn()) {
      return true;
    }

    this._authService.redirectUrl = url;
    this._router.navigate(['/login']);
    return false;
  }
}