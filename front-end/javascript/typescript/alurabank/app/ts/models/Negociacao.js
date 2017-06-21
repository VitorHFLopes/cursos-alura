"use strict";
exports.__esModule = true;
var Negociacao = (function () {
    /*private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/
    //Atalho de criacao do construtor da classe com tipos definidos
    function Negociacao(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    Negociacao.prototype.getData = function () {
        return this._data;
    };
    Negociacao.prototype.getQuantidade = function () {
        return this._quantidade;
    };
    Negociacao.prototype.getValor = function () {
        return this._valor;
    };
    Negociacao.prototype.getVolume = function () {
        return this._quantidade * this._valor;
    };
    return Negociacao;
}());
exports.Negociacao = Negociacao;
