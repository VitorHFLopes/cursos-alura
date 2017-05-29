var connectionFactory = require('../infra/connection-factory');

function rotasProdutos(app) {

    app.get('/produtos', getProdutos);

    function getProdutos(request, response) {

        var connection = connectionFactory();

        connection.query('select * from produtos', getProdutos);

        //primeiro parametro de uma resposta do banco é sempre um erro
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