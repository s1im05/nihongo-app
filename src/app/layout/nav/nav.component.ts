import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

    showBack = false;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeSubs = this.route.url.subscribe(url => {
            this.showBack = url.length > 2;
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

}
