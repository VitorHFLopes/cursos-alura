import { Igualavel } from './Igualavel'

export class Negociacao implements Igualavel<Negociacao>{

    /*private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/

    //Atalho de criacao do construtor da classe com tipos definidos
    constructor(
        readonly data: Date,
        readonly quantidade: number,
        readonly valor: number
    ) { }

    getVolume(): number {

        return this.quantidade * this.valor;
    }

    ehIgual(negociacao: Negociacao):boolean {

        return this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear();
    }
}

//Propriedade readonly não podem ser alterados, caso haja tentativa, o typescript irá lançar um erro de compilação
//Uma classe pode herdar (extends) somente uma outra classe
//Uma classe pode implementar (implements) quantas interfaces forem necessárias