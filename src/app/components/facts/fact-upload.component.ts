import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  templateUrl: './fact-upload.template.html',
  styleUrls: ['./fact-upload.styles.css']
})
export class FactUploadComponent implements OnInit {

  private username: string;
  private options: any = {
    url: 'http://localhost:1337/facts/upload',
    data: {
      username: '',
      title: '',
      category: ''
    },
    autoUpload: false
  };

  private events: EventEmitter<any> = new EventEmitter();

  constructor(private _authService: AuthenticationService) { }

  startUpload(title, category, file) {
    this.options.data.title = title;
    this.options.data.category = category;
    this.options.data.username = this.username;

    if (title === '' || category === 'select' || file === '') {
      return;
    }

    this.events.emit('startUpload');
  }

  ngOnInit(): void {
    this._authService.getLoggedUser()
      .subscribe(res => {
        let currentLoggedUser = res.body.username;
        this.username = currentLoggedUser;
      });
  }
}
