import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RatingComponent],
  exports: [
    CommonModule,
    FormsModule,
    RatingComponent
  ]
})
export class SharedModule { }
