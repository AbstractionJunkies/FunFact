import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';


@Component({
    selector: 'avatar-upload-selector',
    templateUrl: './user-upload-avatar.template.html',
    styleUrls: ['./user-settings.styles.css']
})
export class UserAvatarSettings implements OnInit {

    private events: EventEmitter<any> = new EventEmitter();
    private username: string;
    private userAvatar: string;
    private imgUrl: string = 'https://fun-fact-api.herokuapp.com/static/images/user-аvatar-images/';

    private options: any = {
        url: 'https://fun-fact-api.herokuapp.com/api/users/user/avatar',
        data: {
            username: '',
        },
        autoUpload: false
    };

    public userSettingsToUpdate: FormGroup;
    public notificationOptions: Object;



    constructor(
        private authService: AuthenticationService,
        private userService: UserService,
        private fb: FormBuilder,
        private notification: NotificationsService
    ) { }

    ngOnInit(): void {
        this.options.authToken = JSON.stringify(localStorage.getItem('auth_token'));
        this.options.authTokenPrefix = '';

        this.authService.getLoggedUser()
            .subscribe(res => {
                let currentLoggedUser = res.body.username;
                this.username = currentLoggedUser;
                this.userAvatar = this.imgUrl + res.body.avatar;
            });

        this.userSettingsToUpdate = this.fb.group({
            'currentPassword': ['', Validators.required],
        });

        this.notificationOptions = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };

    }

    handleUpload(data): void {
        if (data && data.response) {
            if (data.status === 200) {
                this.userService.setAvatar(data.response);
                this.userAvatar = this.imgUrl + data.response;

                this.notification.success('Success', 'Avatar updated');
            } else {
                this.notification.error('Error', 'Password is not correct')
            }
        }
    }

    startUpload(file) {
        this.options.data.username = this.username;
        this.options.data.currentPassword = this.userSettingsToUpdate.value.currentPassword;

        if (file === '') {
            return;
        }

        this.events.emit('startUpload');
    }

}
