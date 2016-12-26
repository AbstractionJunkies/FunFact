import { Component, OnInit,
   OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {

  @Input() rating: number;
  public starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    console.log('clicked!!!');
  }

}
