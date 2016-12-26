import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FactService } from './fact.service';
import { Fact } from './fact';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './fact-detail.template.html',
    styleUrls:['./fact-detail.css']
})

export class FactDetailComponent implements OnInit {
    @Input() public fact: Fact;

    public factComments;
    private factID;

    constructor(
        private factService: FactService,
        private route: ActivatedRoute,
        private location: Location
    ) {

        this.fact = <Fact>{};
        this.factComments = [{}];
        this.factID = 0;
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                this.factID = params['id'];
                return this.factService.getFactById(this.factID);
            })
            .map(r => r.json())
            .subscribe((r: any) => {
                this.fact = r;
                //this.factComments = this.fact.comments;

                // for testing only
                this.fact.rating = 3.4;

            });

        this.factService.getFactComments(this.factID)
            .map(r => r.json())
            .subscribe((result: any) => {
                this.factComments = result;
            });

        this.factService.getComment()
            .subscribe((comment) => {
                this.factComments.push(comment);
            });
    }

    goBack(): void {
        this.location.back();
    }

    onRatingClicked(message: string): void {
        console.log(message);
    }
}

