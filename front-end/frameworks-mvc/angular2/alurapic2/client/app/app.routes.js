"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var listagem_component_1 = require("./listagem/listagem.component");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var appRoutes = [
    {
        path: '',
        component: listagem_component_1.ListagemComponent
    },
    {
        path: 'cadastro',
        component: cadastro_component_1.CadastroComponent
    },
    {
        path: '**',
        component: listagem_component_1.ListagemComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes); //'Compila' de alguma forma que o angular entende as rotas
//# sourceMappingURL=app.routes.js.map