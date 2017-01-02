import {Component, OnInit, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';


@Component({
  templateUrl: './fact-upload.template.html',
  styleUrls: ['./fact-upload.styles.css']
})
export class FactUploadComponent implements OnInit {
  private username: string;
  public imgPrev: string;

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

  constructor(private _authService: AuthenticationService) {
    this.imgPrev = 'asdasdasdasdasd2';
  }

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
    this.options.authToken = JSON.stringify(localStorage.getItem('auth_token'));
    this.options.authTokenPrefix = '';
    this.imgPrev = 'asdasdasdasd';

    this._authService.getLoggedUser()
      .subscribe(res => {
        let currentLoggedUser = res.body.username;
        this.username = currentLoggedUser;
      });
  }

   fileChangeEvent(fileInput: any){
    if (fileInput.target.files && fileInput.target.files[0]) {
      let reader = new FileReader();
      let component = this;
      reader.onload = function (e : any) {
        console.log(e.target);
        component.setImagePrev(e.target.result);
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  setImagePrev(str:any){
    this.imgPrev = str;
  }

}
