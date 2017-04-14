import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {az, azType} from '../az-list/az-list.const';


@Component({
  selector: 'app-az-literal',
  templateUrl: './az-literal.component.html',
  styleUrls: ['./az-literal.component.css']
})
export class AzLiteralComponent implements OnInit, OnDestroy {

    azList: Az = az;
    type: string;
    literal: string;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.routeSubs = this.route.params.subscribe(params => {
            if (azType.indexOf(params.type) !== -1) {
                this.type = params.type;
                this.literal = params.literal;
            } else {
                this.router.navigate(['/']);
            }
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

}
