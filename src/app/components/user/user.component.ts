import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    template: `
        <input type="button" value="favorites" (click)="showFavorites()">
        <input type="button" value="settings" (click)="showSettings()">
        <ul *ngIf="displayFavorites">
            <li *ngFor="let favorite of userFavorites">
            <h1>{{favorite.title}}</h1>
            <img [src]='favorite.img' [style.width.px]='600' >
            <div>
                <span class="glyphicon glyphicon-tag">{{favorite.category}}</span>
                <span class="glyphicon glyphicon-star">{{favorite.rating}}</span> 
            </div>
            </li>
        </ul>
        <div *ngIf="displaySettings">
            <avatar-upload-selector></avatar-upload-selector>
        </div>
    `,
    styles: [`
        ul{
            list-style-type: none;
        }
    `]
})
export class UserComponent implements OnInit {

    public userFavorites;
    public displayFavorites;
    public displaySettings;

    constructor(
        private userService: UserService,
        private authService: AuthenticationService
    ) {
        this.userFavorites = [];
        this.displayFavorites = false;
        this.displaySettings = false;
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

    showFavorites() {
        this.displayFavorites = true;
        this.displaySettings = false;
    }
    showSettings() {
        this.displayFavorites = false;
        this.displaySettings = true;
    }
}
