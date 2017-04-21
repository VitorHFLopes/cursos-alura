class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    getVolume() {

        return this._quantidade * this._valor;
    }

    getData() {

        return new Date(this._data.getTime());
    }

    getQuantidade() {

        return this._quantidade;
    }

    getValor() {

        return this._valor;
    }

    //OR

    /*get volume() {

        return this._quantidade * this._valor;
    }

    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }*/
}