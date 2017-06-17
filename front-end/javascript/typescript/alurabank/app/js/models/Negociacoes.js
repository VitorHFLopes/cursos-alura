class Negociacoes {
    constructor() {
        // private _negociacoes: Array<Negociacao> = [];
        //Atalho para criacao de array tipado
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        /*Programação defensiva, no caso, cria uma 'cópia' do array original, não correndo
        risco de apagar o array original*/
        return [].concat(this._negociacoes);
    }
}
