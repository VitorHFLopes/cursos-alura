//Módulo principal do angular que permite a criação de um componente
import {NgModule} from "@angular/core"
import {FotoModule} from "./foto/foto.module";

//Indica que a aplicação irá rodar em um browser
import {BrowserModule} from "@angular/platform-browser"

//Possui os providers necessários para criar a instância do Http
import {HttpModule} from "@angular/http";

//Carrega um helper do rxjs que pega o fluxo de resposta e coloca no array, permitindo o uso de um map assim que a
//resposta chega
import "rxjs/add/operator/map"

import {AppComponent} from './app.component'

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule], //Carrega os módulos necessários, parecido com a criação de módulos no angular 1.x
    declarations: [AppComponent], //Quais components esse módulo irá utilizar, o que faz parte dele
    bootstrap: [AppComponent] //Qual componente carrega primeiro
})
export class AppModule {

}