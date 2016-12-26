import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    template: `
        <ul>
            <li *ngFor="let favorite of userFavorites">
            <h1>{{favorite.title}}</h1>
            <img [src]='favorite.img' [style.width.px]='600' >
            <div>
                <span class="glyphicon glyphicon-tag"> {{favorite.category}}</span>
                <span class="glyphicon glyphicon-star">{{favorite.rating}}</span> 
            </div>
            </li>
        </ul>
    `
})
export class UserComponent implements OnInit {

    public userFavorites;

    constructor(
        private userService: UserService,
        private authService: AuthenticationService
    ) {
        this.userFavorites = [];
    }

    ngOnInit(): void {
        this.authService.getLoggedUser()
            .subscribe(result => {
                let username = result.body.username;

                this.userService.getUserFavorites(username)
                    .map(r => r.json())
                    .subscribe(favorites => {
                        this.userFavorites = favorites;
                    });
            });
    }
}
