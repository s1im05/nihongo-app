import {az} from '../az-list/az-list.const';

class CAzTraining implements AzTraining {

    public constructor(public id: number, public az: number[], public count: number, public size: number) {
    }

    get title(): string {
        const AZ = az, sl = [];

        this.az.forEach(v => {
            const t = AZ.find(f => {
                return f.id === v;
            });
            if (t) {
                sl.push(t.row);
            }
        });
        return sl.join(', ');
    }
}

export const AZ_TRAINING_LIST: AzTrainingList = [
    new CAzTraining(1, [1, 2], 30, 2),
    new CAzTraining(2, [3, 4], 30, 2),
    new CAzTraining(3, [5, 6], 30, 2),
    new CAzTraining(4, [7, 8], 30, 2),
    new CAzTraining(5, [9, 10, 11], 20, 2),
    new CAzTraining(1, [1, 2, 3, 4, 5], 50, 2),
    new CAzTraining(1, [6, 7, 8, 9, 10, 11], 50, 2),
];
