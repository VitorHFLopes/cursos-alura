"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Módulo principal do angular que permite a criação de um componente
var core_1 = require("@angular/core");
var foto_module_1 = require("./foto/foto.module");
var painel_module_1 = require("./painel/painel.module");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var listagem_component_1 = require("./listagem/listagem.component");
var app_routes_1 = require("./app.routes");
//Indica que a aplicação irá rodar em um browser
var platform_browser_1 = require("@angular/platform-browser");
//Possui os providers necessários para criar a instância do Http
var http_1 = require("@angular/http");
//Carrega um helper do rxjs que pega o fluxo de resposta e coloca no array, permitindo o uso de um map assim que a
//resposta chega
require("rxjs/add/operator/map");
var app_component_1 = require("./app.component");
//O ReactiveFormsModule permite fazer toda a validação do formulário HTML no lado do JS, na classe do component
var forms_1 = require("@angular/forms");
var botao_module_1 = require("./botao/botao.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //Carrega os módulos necessários, parecido com a criação de módulos no angular 1.x
            imports: [
                platform_browser_1.BrowserModule,
                foto_module_1.FotoModule,
                http_1.HttpModule,
                painel_module_1.PainelModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                botao_module_1.BotaoModule,
                app_routes_1.routing
            ],
            //Quais components esse módulo irá utilizar, o que faz parte dele
            declarations: [
                app_component_1.AppComponent,
                cadastro_component_1.CadastroComponent,
                listagem_component_1.ListagemComponent
            ],
            //Qual componente carrega primeiro
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map