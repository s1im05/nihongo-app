import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {AZ_TRAINING_LIST} from '../az-training.const';


@Component({
    selector: 'app-az-training',
    templateUrl: './az-training.component.html',
    styleUrls: ['./az-training.component.css']
})
export class AzTrainingComponent implements OnInit, OnDestroy {

    azType: string;
    training: AzTraining;
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.routeSubs = this.route.params.subscribe(params => {
            this.azType = params.type;
            this.training = AZ_TRAINING_LIST.find(f => {
                return f.id === +params.id;
            });
            if (!this.training) {
                this.router.navigate(['/']);
            }
            this.training.clearProgress(this.azType);
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }
}
