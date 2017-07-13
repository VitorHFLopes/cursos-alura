import { Component } from '@angular/core';

//Precisa receber NO MINIMO essas duas configurações
@Component({
    moduleId: module.id, //Inicia a busca dos arquivos do componente a partir da pasta do próprio componente
    selector: 'app', //selector é como o componente será chamado na view
    templateUrl: './app.component.html' //iniciar busca do arquivo na pasta raiz do projeto, no caso client
})
export class AppComponent {

}