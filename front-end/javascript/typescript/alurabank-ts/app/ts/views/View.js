"use strict";
exports.__esModule = true;
var View = (function () {
    function View(seletor) {
        this._elemento = $(seletor);
    }
    View.prototype.update = function (model) {
        this._elemento.html(this.template(model));
    };
    return View;
}());
exports.View = View;
/*
* Classes abstratas (abstract) são usadas quando não faz sentido instanciar a classe.
* No caso, não temos o modelo para preencher o template, só fazendo sentido a instancia
* nas classes filhas.
* */
/*
* Métodos abstratos (abstracts), são usados quando a implementação do mesmo nas
* classes filhas é obrigatória. Verificar a diferença de interface.
* */
