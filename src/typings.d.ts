/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

type Az = Array<AzRow>;

interface AzRow {
    row: string;
    literals: Array<AzLiteral>;
}

interface AzLiteral {
    hiragana: string;
    katakana: string;
    rus: string;
}
