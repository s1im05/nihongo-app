import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

    title: string;
    backLink: string[];
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeSubs = this.route.url.subscribe(url => {
            this.setBackLink(this.route.component['name'], url);
            this.setTitle(url);
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

    setBackLink(componentName: string, url: UrlSegment[]) {
        switch (componentName) {
            case 'AzListComponent':
            case 'AzTrainingComponent':
            case 'AzTrainingListComponent':
                this.backLink = ['..'];
                break;
            case 'AzLiteralComponent':
                this.backLink = [`/az/${url[1]['path']}/list`];
                break;
            default:
                this.backLink = null;
        }
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
