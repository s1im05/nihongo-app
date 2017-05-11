import {Component, OnInit} from '@angular/core';
import {AZ_TRAINING_LIST} from '../az-training.const';

@Component({
    selector: 'app-az-training-list',
    templateUrl: './az-training-list.component.html',
    styleUrls: ['./az-training-list.component.css']
})
export class AzTrainingListComponent implements OnInit {

    trainingList = AZ_TRAINING_LIST;

    constructor() {
    }

    ngOnInit() {
    }

}
