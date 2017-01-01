import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.module.css']
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
