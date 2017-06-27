import { Negociacoes, Negociacao } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject } from '../helpers/decorators/index';
import { meuDecoratorDeClasse } from "../helpers/decorators/meuDecoratorDeClasse";

@meuDecoratorDeClasse()
export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    // private _negociacoes: Negociacoes = new Negociacoes;
    private _negociacoes = new Negociacoes(); //Permitir omitir a escrita do tipo ja que estou atribuindo o valor ja tipado
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {

            this._mensagemView.update('Negociações somente em dias úteis');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso');
    }

    importaDados() {

        function isOk(resposta: Response) {

            if (!resposta.ok) {

                 throw new Error(resposta.statusText);
            }

            return resposta;
        }

        fetch('http://localhost:8080/dados')
            .then(resposta => isOk(resposta))
            .then(resposta => resposta.json())
            .then(
                (dados: any[]) => {

                    dados.map(dado =>
                        new Negociacao(new Date(), dado.vezes, dado.montante))
                        .forEach(negociacao => this._negociacoes.adiciona(negociacao));

                    this._negociacoesView.update(this._negociacoes);
                }
            )
            .catch(erro => console.log(erro));
    }

    private _ehDiaUtil(data: Date) {

        return data.getDay() !== DiaDaSemana.Domingo && data.getDay() !== DiaDaSemana.Sabado;
    }
}

enum DiaDaSemana {

    Domingo, Segundo, Terca, Quarta, Quinta, Sexta, Sabado
}