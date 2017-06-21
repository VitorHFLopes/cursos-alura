"use strict";
exports.__esModule = true;
var Negociacoes = (function () {
    function Negociacoes() {
        // private _negociacoes: Array<Negociacao> = [];
        //Atalho para criacao de array tipado
        this._negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this._negociacoes.push(negociacao);
    };
    Negociacoes.prototype.paraArray = function () {
        /*Programação defensiva, no caso, cria uma 'cópia' do array original, não correndo
        risco de apagar o array original*/
        return [].concat(this._negociacoes);
    };
    return Negociacoes;
}());
exports.Negociacoes = Negociacoes;
