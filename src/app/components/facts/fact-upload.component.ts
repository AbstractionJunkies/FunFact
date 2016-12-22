import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './fact-upload.template.html',
  styleUrls: ['./fact-upload.styles.css']
})
export class FactUploadComponent implements OnInit {

  private username: string = 'Pesho'; //TO DO - Tuka trea slojime po nekuv na4in username-a na lognatiq user
  private options: any = {
    url: 'http://localhost:1337/facts/upload',
    data: {
      username: this.username,
      title: '',
      category: ''
    },
    autoUpload: false
  };

  private events: EventEmitter<any> = new EventEmitter();

  constructor() { }

  startUpload(title, category, file) {
    this.options.data.title = title;
    this.options.data.category = category;

    if (title === '' || category === 'select' || file === '') {
      return;
    }

    this.events.emit('startUpload');
  }

  ngOnInit() {

  }
}
