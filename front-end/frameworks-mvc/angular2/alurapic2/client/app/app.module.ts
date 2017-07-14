//Módulo principal do angular que permite a criação de um componente
import {NgModule} from "@angular/core"
import {FotoModule} from "./foto/foto.module";
import {PainelModule} from "./painel/painel.module";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {ListagemComponent} from "./listagem/listagem.component";
import {routing} from "./app.routes";

//Indica que a aplicação irá rodar em um browser
import {BrowserModule} from "@angular/platform-browser"

//Possui os providers necessários para criar a instância do Http
import {HttpModule} from "@angular/http";

//Carrega um helper do rxjs que pega o fluxo de resposta e coloca no array, permitindo o uso de um map assim que a
//resposta chega
import "rxjs/add/operator/map"

import {AppComponent} from './app.component'

@NgModule({
    //Carrega os módulos necessários, parecido com a criação de módulos no angular 1.x
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing
    ],

    //Quais components esse módulo irá utilizar, o que faz parte dele
    declarations: [
        AppComponent,
        CadastroComponent,
        ListagemComponent
    ],

    //Qual componente carrega primeiro
    bootstrap: [AppComponent]
})
export class AppModule {

}