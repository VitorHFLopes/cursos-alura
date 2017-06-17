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
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    getData() {
        return this._data;
    }
    getQuantidade() {
        return this._quantidade;
    }
    getValor() {
        return this._valor;
    }
    getVolume() {
        return this._quantidade * this._valor;
    }
}
