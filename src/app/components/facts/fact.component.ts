import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Fact } from './fact';

@Component({
    selector: '[fact-selector]',
    template: `
        <div>Fact ID : {{id}}</div>
        <h1 (click)="goToDetail(id)">TITLE: {{title}}</h1>
        <img [src]='img' [style.height.px]='100'>
        <h4>Uploader: {{uploader}}</h4>
        <div>Category: {{category}}</div>
    `
})
export class FactComponent {
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
    }


    goToDetail(id) {
        this.router.navigate(['/facts/fact', id]);
    }
}
