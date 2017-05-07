var app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views');

function configuraExpress() {
    return app;
}

module.exports = configuraExpress;