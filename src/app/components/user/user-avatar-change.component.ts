import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';


@Component({
    selector: 'avatar-upload-selector',
    templateUrl: './user-upload-avatar.template.html',
    styleUrls: ['./user-settings.styles.css']
})
export class UserAvatarSettings implements OnInit {

    private events: EventEmitter<any> = new EventEmitter();
    private username: string;
    private userAvatar: string;
    private imgUrl: string = 'http://localhost:1337/static/images/user-аvatar-images/';

    private options: any = {
        url: 'http://localhost:1337/api/users/user/avatar',
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
        private fb: FormBuilder
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
            this.userService.setAvatar(data.response);
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
