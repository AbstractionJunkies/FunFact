import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './fact-upload.template.html',
  styleUrls: ['./fact-upload.styles.css']
})
export class FactUploadComponent {

  private isUploaded: boolean = false;
  private hasBaseDropZoneOver: boolean = false;
  private options: Object = {
    url: 'http://localhost:1337/facts/upload',
    data: { user: 'Peshooooooooooooooooooooooooooooooooooooooooooooooooooooooooo' }
  };
  private sizeLimit = 2000000;

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.isUploaded = data.isUploaded;
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
}
