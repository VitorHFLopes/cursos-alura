class MensagemView extends View{

    constructor(elemento = '<div></div>') {

        super(elemento);
    }

    template(model) {

        return `<p class="alert alert-info">${model.getTexto()}</p>`;
    }
}