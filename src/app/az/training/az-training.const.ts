import {az} from '../az-list/az-list.const';

export const LS_TRAINING_PREFIX = 'az_t_';

class CAzTraining implements AzTraining {

    private _stepCount: number;

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

    public getCompletedCount(type: string): number {
        return +window.localStorage.getItem(LS_TRAINING_PREFIX + type + '_' + this.id) || 0;
    }

    public setCompletedCount(type: string, count: number): void {
        window.localStorage.setItem(LS_TRAINING_PREFIX + type + '_' + this.id, count.toString());
    }

    public getCompletedLevel(type: string): number {
        const prcnt = this.getCompletedCount(type) / this.getStepCount();

        if (prcnt < 0.5) {
            return 0;
        } else if (prcnt < 1) {
            return 1;
        } else {
            return 2;
        }
    }

    public clearProgress(type: string): void {
        window.localStorage.removeItem(LS_TRAINING_PREFIX + type + '_' + this.id);
    }

    public getStepCount(): number {
        if (!this._stepCount) {
            this._stepCount = this.getTrainingList().length;
        }
        return this._stepCount;
    }

    public getTrainingList(): Array<AzLiteral> {
        const trainList = [];
        if (this.az.length) {
            this.az.forEach(id => {
                az.find(f => {
                    return f.id === id;
                }).literals.forEach(lit => {
                    for (let i = 0; i < this.count; i++) {
                        trainList.push(lit);
                    }
                });
            });
        } else {
            az.forEach(list => {
                list.literals.forEach(lit => {
                    for (let i = 0; i < this.count; i++) {
                        trainList.push(lit);
                    }
                });
            });
        }
        return trainList;
    }
}

export const AZ_TRAINING_LIST: AzTrainingList = [
    new CAzTraining(1, [1, 2], 4, 2),
    new CAzTraining(2, [3, 4], 4, 2),
    new CAzTraining(3, [5, 6], 4, 2),
    new CAzTraining(4, [7, 8], 4, 2),
    new CAzTraining(5, [9, 10, 11], 4, 2),
    new CAzTraining(6, [1, 2, 3, 4, 5], 3, 3),
    new CAzTraining(7, [6, 7, 8, 9, 10, 11], 3, 3),
    new CAzTraining(8, [], 2, 3),
];

export const RANDOM_SORT = function(a: any, b: any) {
    return Math.random() > 0.5 ? 1 : -1;
};
