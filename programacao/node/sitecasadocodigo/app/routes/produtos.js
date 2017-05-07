var mysql = require('mysql');

var connectionProperties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'casadocodigo'
};

var connection = mysql.createConnection(connectionProperties);

function rotasProdutos(app) {

    app.get('/produtos', getProdutos);

    function getProdutos(request, response) {

        connection.query('select * from produtos', getProdutos);

        //primeiro parametro de uma resposta do banco é sempre um erro
        function getProdutos(error, produtos) {

            if (error) {

                console.log(error);
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