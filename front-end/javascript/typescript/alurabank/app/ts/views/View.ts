abstract class View<T> {

    private _elemento: JQuery;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }

    update(model: T): void {

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}

/*
* Classes abstratas (abstract) são usadas quando não faz sentido instanciar a classe.
* No caso, não temos o modelo para preencher o template, só fazendo sentido a instancia
* nas classes filhas.
* */

/*
* Métodos abstratos (abstracts), são usados quando a implementação do mesmo nas
* classes filhas é obrigatória. Verificar a diferença de interface.
* */
