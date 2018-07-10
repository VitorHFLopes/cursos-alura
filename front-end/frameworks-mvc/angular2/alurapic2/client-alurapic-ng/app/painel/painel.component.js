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
var PainelComponent = (function () {
    function PainelComponent() {
    }
    PainelComponent.prototype.ngOnInit = function () {
        if (this._titulo.length > 7) {
            this._titulo = this._titulo.substr(0, 7) + '...';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PainelComponent.prototype, "_titulo", void 0);
    PainelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'painel',
            templateUrl: './painel.component.html',
            styleUrls: ['./painel.component.css']
        })
    ], PainelComponent);
    return PainelComponent;
}());
exports.PainelComponent = PainelComponent;
// Por que o ngOnInit e não um constructor? Pois por ser uma inbound property, o this._titulo só será preenchido depois
// da criação do componente. Portanto o angular nos disponibiliza um método ngOnInit que é chamado assim que a criação
// do componente acontece, não gerando .length of undefined Error.
//Para garantir sua implementação correta, utilizamos a interface, o contrato, OnInit
//Para utilizar um elemento diretamente do DOM, temos que atribuir o elemento a uma referencia do angular, ElementRef.
//Para manipularmos o elemento, devemos pegar a propriedade nativeElement 
//# sourceMappingURL=painel.component.js.map