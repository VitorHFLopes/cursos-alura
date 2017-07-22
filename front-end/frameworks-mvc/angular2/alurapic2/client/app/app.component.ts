import { Component } from '@angular/core';
import { Http } from '@angular/http';

//Precisa receber NO MINIMO essas duas configurações
@Component({
    moduleId: module.id, //Inicia a busca dos arquivos do componente a partir da pasta do próprio componente
    selector: 'app', //selector é como o componente será chamado na view
    templateUrl: './app.component.html' //iniciar busca do arquivo na pasta raiz do projeto, no caso client
})
export class AppComponent {

    //O construtor de um componente é sempre chamado na sua criação, assim como um objeto

    //No caso, o Inject faz um new Http implicitamente, utilizando ECMAScript 2015
    // constructor(@Inject(Http) http) {
    //
    // }

    _fotos: Object[] = [];

    //Ja o TypeScript permite que, só de tipar a variável ele se encarrega de injetar a dependência
    constructor(http: Http) {

        http.get('v1/fotos') //Observable Response - Stream

            .map(response => response.json()) //Com o rxjs map helper ativado é possível fazer isso

            .subscribe(fotos => { //Me 'inscrevo' para saber quando os dados foram retornados

                //Por padrão, as respostas do Http do angular2 vêm sempre em texto puro, portanto, no caso, não pode ser
                //inserida em um array de objetos, por isso a transformação em json antes de injetar
                this._fotos = fotos;
            }, error => console.error(error));
    }
}