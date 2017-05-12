import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {AZ_TRAINING_LIST} from '../training/az-training.const';

@Component({
    selector: 'app-az-progress',
    templateUrl: './az-progress.component.html',
    styleUrls: ['./az-progress.component.css']
})
export class AzProgressComponent implements OnInit, OnDestroy {

    total = 0;
    score = 0;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.routeSubs = this.route.params.subscribe(params => {
            this.total = AZ_TRAINING_LIST.length * 2;
            AZ_TRAINING_LIST.forEach(v => {
                this.score += v.getCompletedLevel(params.type);
            });
        });
    }

    ngOnDestroy(): void {
        this.routeSubs.unsubscribe();
    }

    get progress(): number {
        return Math.round(this.score / this.total * 100);
    }
}
