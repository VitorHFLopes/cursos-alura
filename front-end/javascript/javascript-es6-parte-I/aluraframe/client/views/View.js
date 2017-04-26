class View {

    constructor(elemento = '<div></div>') {

        this._elemento = elemento;
    }

    template() {

        throw new Error('O método template deve ser instanciado');
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}