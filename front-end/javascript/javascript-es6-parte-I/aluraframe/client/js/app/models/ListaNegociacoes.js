class ListaNegociacoes {
    
    constructor() {
        
        this._negociacoes = [];
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }

    esvazia() {

        this.setNegociacoes();
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    setNegociacoes(value = []) {

        this._negociacoes = value;
    }
}