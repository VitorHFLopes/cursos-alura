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
    _fotoService: FotoService;
    _mensagem: string = '';

    constructor(service: FotoService) {

        this._fotoService = service;
        this._fotoService.lista()
            .subscribe(fotos => {

                this._fotos = fotos;
            }, error => console.error(error));
    }

    remove(foto: FotoComponent) {

        this._fotoService
            .remove(foto)
            .subscribe(() => {

                //O angular 2 não possui mais o watch nas variáveis que o angular 1 possuia, o que acarretava em uma
                //perda de performance. Agora, para alterarmos a view com os novos valores, é necessário ativar o
                //sistema de "change detection" do Angular 2, que consiste em alterar a referência do objeto (ou array)
                //criado na instância anterior

                let novasFotos = this._fotos.slice();
                let indice = novasFotos.indexOf(foto);
                novasFotos.splice(indice, 1);
                this._fotos = novasFotos;
                this._mensagem = `Foto ${foto.titulo} removida com sucesso`;
            },
                error => {

                    console.error(error);
                    this._mensagem = 'Foto removida com sucesso';
                }
            )
    }
}