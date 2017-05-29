var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);

app.listen(3000, servidorUp);

function servidorUp() {
    
    console.log('Servidor rodando');
}