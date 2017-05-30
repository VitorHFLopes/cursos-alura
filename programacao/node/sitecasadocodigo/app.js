var app = require('./config/express')();

app.listen(3000, servidorUp);

function servidorUp() {
    
    console.log('Servidor rodando');
}