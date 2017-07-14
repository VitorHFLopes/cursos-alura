import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    _fotos: Object[] = [];

    constructor(http: Http) {

        http.get('v1/fotos')
            .map(response => response.json())
            .subscribe(fotos =>
                    this._fotos = fotos,
                error => console.error(error));
    }
}