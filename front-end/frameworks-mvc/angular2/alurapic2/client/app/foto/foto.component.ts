import {Component, Input} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {

    // ECMAScript2015 - ES6
    // _titulo;
    // _url;
    //
    // constructor() {
    //
    //     this._titulo = 'titulo';
    //     this._url = 'url';
    // }

    // TypeScript
    @Input() titulo: string; //Inbound property - aceita valores
    @Input() url: string; //Inbound property - aceita valores
    descricao: string;
}