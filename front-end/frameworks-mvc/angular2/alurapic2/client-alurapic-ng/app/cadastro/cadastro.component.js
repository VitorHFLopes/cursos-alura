"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var foto_component_1 = require("../foto/foto.component");
var forms_1 = require("@angular/forms");
var foto_service_1 = require("../foto/foto.service");
var router_1 = require("@angular/router");
var CadastroComponent = (function () {
    function CadastroComponent(service, formBuilder, route, router) {
        var _this = this;
        this._foto = new foto_component_1.FotoComponent();
        this._mensagem = '';
        this._service = service;
        //É o roteador, ou seja, o responsável por direcionar a navegação da aplicação
        this._router = router;
        //Retorna a rota ativa no momento da instancia
        this._route = route;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id) {
                return;
            }
            _this._service
                .buscaPorId(id)
                .subscribe(function (foto) {
                _this._foto = foto;
            }, function (error) { return console.error(error); });
        });
        this._cadastroForm = formBuilder.group({
            //Validators define as validações necessárias do input
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: ['']
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        this._service
            .cadastra(this._foto)
            .subscribe(function (mensagem) {
            _this._mensagem = mensagem.getMensagem();
            if (mensagem.ehInclusao()) {
                _this._router.navigate(['']);
            }
            _this._foto = new foto_component_1.FotoComponent();
        }, function (error) { return console.error(error); });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }),
        __metadata("design:paramtypes", [foto_service_1.FotoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//Cuidado ao definir uma const, as vezes não aparece erro, porém o código não funciona. No caso eu tentei deixar o
//headers como 'const', porém ja atribui o .append nele, o que gerou o conflito, porém não apontou erro 
//# sourceMappingURL=cadastro.component.js.map