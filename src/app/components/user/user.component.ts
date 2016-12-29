import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    template: `
        <input type="button" value="favorites" (click)="showFavorites()" class="form-control">
        <input type="button" value="private settings" (click)="showSettings()" class="form-control">
        <input type="button" value="change avatar" (click)="showAvatarUpload()" class="form-control">
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
            <user-settings-selector></user-settings-selector>
        </div>
        <div *ngIf="displayAvatarSettings">
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
    public displayFavorites: boolean;
    public displaySettings: boolean;
    public displayAvatarSettings: boolean;

    constructor(
        private userService: UserService,
        private authService: AuthenticationService
    ) {
        this.userFavorites = [];
        this.displayFavorites = false;
        this.displaySettings = false;
        this.displayAvatarSettings = false;
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
        this.displayAvatarSettings = false;
    }

    showSettings() {
        this.displaySettings = true;
        this.displayFavorites = false;
        this.displayAvatarSettings = false;
    }

    showAvatarUpload() {
        this.displayAvatarSettings = true;
        this.displayFavorites = false;
        this.displaySettings = false;
    }
}
