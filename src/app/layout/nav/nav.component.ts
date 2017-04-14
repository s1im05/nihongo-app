import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

    title: string;
    showBack = false;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeSubs = this.route.url.subscribe(url => {
            this.showBack = url.length > 2;
            this.setTitle(url);
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

    setTitle(url) {
        if (url.length >= 2) {
            switch (url[0].path) {
                case 'az':
                    switch (url[1].path) {
                        case 'hiragana':
                            this.title = 'Хирагана';
                            break;
                        case 'katakana':
                            this.title = 'Катакана';
                            break;
                    }
                    break;
            }
        }
    }

}
