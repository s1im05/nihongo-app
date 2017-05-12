import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {AZ_TRAINING_LIST} from '../az-training.const';

@Component({
    selector: 'app-az-training-list',
    templateUrl: './az-training-list.component.html',
    styleUrls: ['./az-training-list.component.css']
})
export class AzTrainingListComponent implements OnInit, OnDestroy {

    trainingList = AZ_TRAINING_LIST;
    azType: string;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.routeSubs = this.route.params.subscribe(params => {
            this.azType = params.type;
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

}
