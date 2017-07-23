import {Component} from "@angular/core";
import {FotoService} from "../foto/foto.service";
import {FotoComponent} from "../foto/foto.component";

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    _fotos: FotoComponent[] = [];

    constructor(service: FotoService) {

        service.lista()
            .subscribe(fotos => {

                this._fotos = fotos
            }, error => console.error(error));
    }
}