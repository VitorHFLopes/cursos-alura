class Negociacoes {

    // private _negociacoes: Array<Negociacao> = [];

    //Atalho para criacao de array tipado
    private _negociacoes: Negociacao[] = []; 

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        /*Programação defensiva, no caso, cria uma 'cópia' do array original, não correndo
        risco de apagar o array original*/
        return [].concat(this._negociacoes);
    }
}