import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import {Http, Headers} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    _foto: FotoComponent = new FotoComponent();
    _http: Http;

    constructor(http: Http) {

        this._http = http;
    }

    cadastrar(event) {

        event.preventDefault();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this._http.post('v1/fotos', JSON.stringify(this._foto), {headers: headers})
            .subscribe(() => {

                this._foto.titulo = '';
                this._foto.url = '';
                this._foto.descricao = '';
                console.log('foi')

            }, error => console.error(error));
    }
}

//Cuidado ao definir uma const, as vezes não aparece erro, porém o código não funciona. No caso eu tentei deixar o
//headers como 'const', porém ja atribui o .append nele, o que gerou o conflito, porém não apontou erro