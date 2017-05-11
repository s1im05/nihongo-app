import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {az, azType} from './az-list.const';


@Component({
  selector: 'app-az-list',
  templateUrl: './az-list.component.html',
  styleUrls: ['./az-list.component.css']
})
export class AzListComponent implements OnInit, OnDestroy {

    azList: Az = az;
    type: string;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.routeSubs = this.route.params.subscribe(params => {
            if (azType.indexOf(params.type) !== -1) {
                this.type = params.type;
            } else {
                this.router.navigate(['/']);
            }
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

    setScrollPos(e: any) {
    }

}
