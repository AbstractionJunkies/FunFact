import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'avatar-upload-selector',
    template: `
    <div>
        <input type="file" #file [events]="events" ngFileSelect [options]="options" >
        <input type="button" value="Upload" (click)="startUpload(file.value)" />
    </div>
    `
})
export class UserAvatarUploadComponent implements OnInit {

    private events: EventEmitter<any> = new EventEmitter();
    private username: string;

    private options: any = {
        url: 'http://localhost:1337/facts/user/avatar',
        data: {
            username: ''
        },
        autoUpload: false
    };

    constructor(private authService: AuthenticationService) {

    }

    ngOnInit(): void {
        this.authService.getLoggedUser()
            .subscribe(res => {
                let currentLoggedUser = res.body.username;
                this.username = currentLoggedUser;
            });
    }

    startUpload(file) {
        this.options.data.username = this.username;

        if (file === '') {
            return;
        }

        this.events.emit('startUpload');
    }
}
