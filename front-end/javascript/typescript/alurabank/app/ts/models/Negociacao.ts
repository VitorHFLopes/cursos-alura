class Negociacao {

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
        private _data: Date,
        private _quantidade: number, 
        private _valor: number
    ) { }

    getData(): Date {

        return this._data;
    }

    getQuantidade(): number {

        return this._quantidade;
    }

    getValor(): number {

        return this._valor;
    }

    getVolume(): number {

        return this._quantidade * this._valor;
    }
}