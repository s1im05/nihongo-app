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
        return sl.join(', ') || 'Экзамен';
    }

    get completedCount(): number {
        return +window.localStorage.getItem('az_t_' + this.id) || 0;
    }

    get completedLevel(): number {
        const prcnt = this.completedCount / this.count;

        if (prcnt < 0.5) {
            return 0;
        } else if (prcnt < 1) {
            return 1;
        } else {
            return 2;
        }
    }
}

export const AZ_TRAINING_LIST: AzTrainingList = [
    new CAzTraining(1, [1, 2], 20, 2),
    new CAzTraining(2, [3, 4], 20, 2),
    new CAzTraining(3, [5, 6], 20, 2),
    new CAzTraining(4, [7, 8], 20, 2),
    new CAzTraining(5, [9, 10, 11], 20, 2),
    new CAzTraining(6, [1, 2, 3, 4, 5], 40, 3),
    new CAzTraining(7, [6, 7, 8, 9, 10, 11], 40, 3),
    new CAzTraining(8, [], 60, 3),
];
