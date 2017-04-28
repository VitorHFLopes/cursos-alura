function rotasProdutos(app) {

    app.get('/produtos', getProdutos);

    function getProdutos(request, response) {

        response.render('produtos/lista');
    }
}

module.exports = rotasProdutos;