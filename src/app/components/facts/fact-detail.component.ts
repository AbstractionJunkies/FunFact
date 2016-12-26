import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FactService } from './fact.service';
import { Fact } from './fact';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl:'./fact-detail.template.html'
})

export class FactDetailComponent implements OnInit {
    @Input() public fact: Fact;

    public factComments;

    constructor(
        private factService: FactService,
        private route: ActivatedRoute,
        private location: Location
    ) {

        this.fact = <Fact>{};
        this.factComments = [{
            username: '',
            content: ''
        }];
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.factService.getFactById(params['id']))
            .map(r => r.json())
            .subscribe((r: any) => {
                this.fact = r;
                this.factComments = this.fact.comments;
                console.log(this.factComments);

            });
    }

    goBack(): void {
        this.location.back();
    }

    onRatingClicked(message: string): void {
        console.log(message);
    }
}

