"use strict";
exports.__esModule = true;
var Negociacoes_1 = require("models/Negociacoes");
var Negociacao_1 = require("models/Negociacao");
var NegociacoesView_1 = require("views/NegociacoesView");
var MensagemView_1 = require("views/MensagemView");
var NegociacaoController = (function () {
    function NegociacaoController() {
        // private _negociacoes: Negociacoes = new Negociacoes;
        this._negociacoes = new Negociacoes_1.Negociacoes(); //Permitir omitir a escrita do tipo ja que estou atribuindo o valor ja tipado
        this._negociacoesView = new NegociacoesView_1.NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    NegociacaoController.prototype.adiciona = function (event) {
        event.preventDefault();
        var negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    };
    return NegociacaoController;
}());
exports.NegociacaoController = NegociacaoController;
