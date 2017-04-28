var app = require('express')();
app.set('view engine', 'ejs');

function configuraExpress() {
    return app;
}

module.exports = configuraExpress;