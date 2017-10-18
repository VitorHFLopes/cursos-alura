import {Component, Input, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{

    @Input() _titulo: string;

    ngOnInit(): void {

        if (this._titulo.length > 7) {

            this._titulo = this._titulo.substr(0, 7) + '...';
        }
    }
}

// Por que o ngOnInit e não um constructor? Pois por ser uma inbound property, o this._titulo só será preenchido depois
// da criação do componente. Portanto o angular nos disponibiliza um método ngOnInit que é chamado assim que a criação
// do componente acontece, não gerando .length of undefined Error.

//Para garantir sua implementação correta, utilizamos a interface, o contrato, OnInit

//Para utilizar um elemento diretamente do DOM, temos que atribuir o elemento a uma referencia do angular, ElementRef.
//Para manipularmos o elemento, devemos pegar a propriedade nativeElement