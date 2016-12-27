import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Fact} from './fact';
import {FactService} from './fact.service';

@Component({
  selector: '[fact-selector]',
  templateUrl: './fact.template.html',
  styleUrls: ['./fact.styles.css', '../../../css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None,

})
export class FactComponent {
  public commentsCount: Number;

  private id: string;
  private title: string;
  private uploader: string;
  private img: string;
  private category: string;
  private comments: [string];

  constructor(private router: Router) {

  }

  @Input('fact') set fact(fact: Fact) {
    this.id = fact._id;
    this.title = fact.title;
    this.uploader = fact.uploader;
    this.img = fact.img;
    this.category = fact.category;
    this.comments = fact.comments;
    this.commentsCount = fact.comments.length;
  }


  goToDetail(id) {
    this.router.navigate(['/facts/fact', id]);
  }

  standby() {
    //TODO: download the image!
    this.img = 'http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg';
  }
}
