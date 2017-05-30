var express = require('express');
var expressLoad = require('express-load');

function configuraExpress() {

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    var expressLoadConfig = {
        cwd: 'app'
    };

    expressLoad('routes', expressLoadConfig)
        .then('infra')
        .into(app);

    return app;
}

module.exports = configuraExpress;