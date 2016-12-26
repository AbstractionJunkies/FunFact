import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Fact } from './fact';

@Component({
    selector: '[fact-selector]',
    template: `
    <div class="fact">
        <h1 class="clickable" (click)="goToDetail(id)">TITLE: {{title}}</h1>
        <img class="fact-image-small" [src]='img'>
        <div class="fact-info">
            <span class="glyphicon glyphicon-user"></span><span> {{uploader}}</span>
            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span><span> {{commentsCount}}</span>
            <span class="glyphicon glyphicon-tag"></span><span> {{category}}</span>
        </div>
    </div>
    `,
    styles: [`
        .fact{
            border:1px solid black;
            width:300px;
            border-radius:10px;
            margin:10px;
        }
    `,
    `
        .fact-image-small{
            width:300px;
        }
    
    `]
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
}
