import { logarTempoDeExecucao } from '../helpers/decorators/index'

export abstract class View<T> {

    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao()
    update(model: T): void {

        let template = this.template(model);

        if (this._escapar) {

            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this._elemento.html(template);
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
