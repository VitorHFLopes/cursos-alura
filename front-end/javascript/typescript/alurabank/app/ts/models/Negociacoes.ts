import { Negociacao } from './Negociacao';
import { Igualavel } from './Igualavel';

export class Negociacoes implements Igualavel<Negociacoes>{

    // private _negociacoes: Array<Negociacao> = [];

    //Atalho para criacao de array tipado
    private _negociacoes: Negociacao[] = []; 

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        /*Programação defensiva, no caso, cria uma 'cópia' do array original, não correndo
        risco de apagar o array original*/
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    ehIgual(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.paraArray());
    }
}

//Uma classe pode herdar (extends) somente uma outra classe
//Uma classe pode implementar (implements) quantas interfaces forem necessárias