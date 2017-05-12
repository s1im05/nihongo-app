import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {AZ_TRAINING_LIST, RANDOM_SORT} from '../az-training.const';
import {az} from '../../az-list/az-list.const';


@Component({
    selector: 'app-az-training',
    templateUrl: './az-training.component.html',
    styleUrls: ['./az-training.component.css']
})
export class AzTrainingComponent implements OnInit, OnDestroy {

    azType: string;
    training: AzTraining;
    step = 0;
    totalCount = 0;
    correctAnswer = 0;
    trainList: Array<AzLiteral>;
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
            this.trainList = [];

            if (this.training.az.length) {
                this.training.az.forEach(id => {
                    az.find(f => {
                        return f.id === id;
                    }).literals.forEach(lit => {
                        for (let i = 0; i < this.training.count; i++) {
                            this.trainList.push(lit);
                        }
                    });
                });
            } else {
                az.forEach(list => {
                    list.literals.forEach(lit => {
                        for (let i = 0; i < this.training.count; i++) {
                            this.trainList.push(lit);
                        }
                    });
                });
            }

            this.totalCount = this.trainList.length;
            this.trainList.sort(RANDOM_SORT);
        });
    }

    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }

    newStep() {
        this.step++;
    }

    get successProgress(): number {
        return Math.round(this.correctAnswer / this.totalCount * 100);
    }

    get dangerProgress(): number {
        return Math.round((this.step - this.correctAnswer) / this.totalCount * 100);
    }
}
