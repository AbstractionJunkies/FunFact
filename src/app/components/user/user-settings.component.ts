import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Response } from '@angular/http';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';


@Component({
    selector: 'user-settings-selector',
    templateUrl: './user-settings.template.html',
    styleUrls: ['./user-settings.styles.css']
})
export class UserSettingsComponent implements OnInit {

    private events: EventEmitter<any> = new EventEmitter();
    private username: string;
    private userId: string;

    private imgUrl: string = 'https://fun-fact-api.herokuapp.com/static/images/user-аvatar-images/';

    public userSettingsToUpdate: FormGroup;
    public notificationOptions: Object;



    constructor(
        private authService: AuthenticationService,
        private userService: UserService,
        private fb: FormBuilder,
        private notification: NotificationsService
    ) { }

    ngOnInit(): void {

        this.authService.getLoggedUser()
            .subscribe(res => {
                let currentLoggedUser = res.body.username;
                this.username = currentLoggedUser;
                this.userId = res.body._id;
            });

        this.userSettingsToUpdate = this.fb.group({
            'newPassword': ['', Validators.minLength(4)],
            'email': ['',],
            'currentPassword': ['', Validators.required],
        });

        this.notificationOptions = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
    }

    updateSettings() {
        this.userService.updateSettings(this.userId, this.userSettingsToUpdate.value)
            .subscribe((res: any) => {
                if (res.status === 201) {
                    this.notification.success('', res.body.message);
                } else {
                    this.notification.error('', res.body.message);
                }
            },
            (err) => {
                console.log(err);
            });
    }
}
