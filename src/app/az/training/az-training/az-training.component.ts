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
    azAll: Array<AzLiteral> = [];
    totalCount = 0;
    correctAnswer = 0;
    completedLevel: number;
    currentLiteral: AzLiteral;
    answerSamples: Array<Array<AzLiteral>>;
    blockAnswer = false;
    trainList: Array<AzLiteral> = [];
    private routeSubs: Subscription;

    constructor(public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit(): void {
        this.routeSubs = this.route.params.subscribe(params => {
            this.azType = params.type;
            this.training = AZ_TRAINING_LIST.find(f => {
                return f.id === +params.id;
            });
            if (!this.training) {
                this.router.navigate(['/']);
            }

            this.initTraining();
        });
    }

    ngOnDestroy(): void {
        this.routeSubs.unsubscribe();
    }

    initTraining(): void {
        this.step = 0;
        this.completedLevel = null;
        this.correctAnswer = 0;
        this.training.clearProgress(this.azType);

        az.forEach(list => {
            list.literals.forEach(lit => {
                this.azAll.push(lit);
            });
        });

        this.trainList = this.training.getTrainingList();
        this.totalCount = this.trainList.length;
        this.trainList.sort(RANDOM_SORT);

        this.newStep();
    }

    newStep(): void {
        this.answerSamples = [];
        this.currentLiteral = this.trainList.pop();

        const count = Math.pow(this.training.size, 2),
            list = [this.currentLiteral, ...this.azAll.filter(f => {
                return f[this.azType] !== this.currentLiteral[this.azType];
            }).sort(RANDOM_SORT).slice(0, count - 1)].sort(RANDOM_SORT);

        for (let i = 0; i < this.training.size; i++) {
            this.answerSamples.push(list.splice(0, this.training.size));
        }
    }

    answer(e: any, symbol: string): void {
        if (this.blockAnswer) {
            return;
        }

        this.blockAnswer = true;
        if (this.currentLiteral[this.azType] === symbol) {
            this.correctAnswer++;
            e.target.classList.add('success');
        } else {
            e.target.classList.add('danger');
        }

        this.training.setCompletedCount(this.azType, this.correctAnswer);
        this.step++;

        window.setTimeout(() => {
            this.blockAnswer = false;
            if (this.step < this.totalCount) {
                this.newStep();
            } else {
                this.completedLevel = this.training.getCompletedLevel(this.azType);
            }
        }, 500);

        //this.completedLevel = 1;
    }

    get successProgress(): number {
        return Math.round(this.correctAnswer / this.totalCount * 100);
    }

    get dangerProgress(): number {
        return Math.round(((this.step) - this.correctAnswer) / this.totalCount * 100);
    }

    startAgain() {
        this.initTraining();
    }
}
