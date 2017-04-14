import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-az-list',
  templateUrl: './az-list.component.html',
  styleUrls: ['./az-list.component.css']
})
export class AzListComponent implements OnInit, OnDestroy {

    type: string;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeSubs = this.route.params.subscribe(params => {
            this.type = params.type;
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

}
