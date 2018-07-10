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
var http_1 = require("@angular/http");
//Precisa receber NO MINIMO essas duas configurações
var AppComponent = (function () {
    //Ja o TypeScript permite que, só de tipar a variável ele se encarrega de injetar a dependência
    function AppComponent(http) {
        var _this = this;
        //O construtor de um componente é sempre chamado na sua criação, assim como um objeto
        //No caso, o Inject faz um new Http implicitamente, utilizando ECMAScript 2015
        // constructor(@Inject(Http) http) {
        //
        // }
        this._fotos = [];
        http.get('v1/fotos') //Observable Response - Stream
            .map(function (response) { return response.json(); }) //Com o rxjs map helper ativado é possível fazer isso
            .subscribe(function (fotos) {
            //Por padrão, as respostas do Http do angular2 vêm sempre em texto puro, portanto, no caso, não pode ser
            //inserida em um array de objetos, por isso a transformação em json antes de injetar
            _this._fotos = fotos;
        }, function (error) { return console.error(error); });
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: './app.component.html' //iniciar busca do arquivo na pasta raiz do projeto, no caso client
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map