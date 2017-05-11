class CAzTraining implements AzTraining {

    public constructor(public id: number, public az: number[], public count: number, public size: number) {
    }

    get title(): string {
        return `Тренировввка ${this.id}`;
    }
}

export const AZ_TRAINING_LIST: AzTrainingList = [
    new CAzTraining(1, [1], 20, 2)
];
