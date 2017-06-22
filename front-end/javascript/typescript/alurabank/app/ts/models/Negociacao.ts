export class Negociacao {

    /*private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/

    //Atalho de criacao do construtor da classe com tipos definidos
    constructor(
        readonly data: Date,
        readonly quantidade: number,
        readonly valor: number
    ) { }

    getVolume(): number {

        return this.quantidade * this.valor;
    }
}

//Propriedade readonly não podem ser alterados, caso haja tentativa, o typescript irá lançar um erro de compilação