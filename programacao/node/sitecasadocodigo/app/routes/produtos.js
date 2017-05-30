function rotasProdutos(app) {

    app.get('/produtos', getProdutos);

    function getProdutos(request, response) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;

        produtosBanco.lista(connection, getProdutos);

        //primeiro parametro de qualquer callback é sempre um erro
        function getProdutos(error, produtos) {

            if (error) {

                console.log(error);
                return;
            }

            var viewParams = {
                lista: produtos
            };

            response.render('produtos/lista', viewParams);
        }

        connection.end();
    }
}

module.exports = rotasProdutos;