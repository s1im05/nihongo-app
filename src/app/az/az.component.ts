import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';


@Component({
    selector: 'app-az',
    templateUrl: './az.component.html',
    styleUrls: ['./az.component.css']
})
export class AzComponent implements OnInit, OnDestroy {

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
