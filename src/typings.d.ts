/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

type Az = Array<AzRow>;
type AzTrainingList = Array<AzTraining>;

interface AzRow {
    id: number;
    row: string;
    literals: Array<AzLiteral>;
}

interface AzLiteral {
    hiragana: string;
    katakana: string;
    rus: string;
}

interface AzTraining {
    id: number;
    az: number[];
    count: number;
    size: number;
    title: string;
    completedCount: number;
    completedLevel: number;
}
