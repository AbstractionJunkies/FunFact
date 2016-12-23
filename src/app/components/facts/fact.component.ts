import { Component, Input } from '@angular/core';

import { Fact } from './fact';

@Component({
    selector: '[fact-selector]',
    template: `
        <div>Fact ID : {{id}}</div>
        <h1>TITLE: {{title}}</h1>
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

    private imgHost: string = 'http://localhost:1337/static/images/fact-images/'

    @Input('fact') set fact(fact: Fact) {
        this.id = fact._id;
        this.title = fact.title;
        this.uploader = fact.uploader;
        this.img = this.imgHost + fact.img;
        this.category = fact.category;
        this.comments = fact.comments;
    }

}
