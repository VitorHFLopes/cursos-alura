import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser' //Indica que a aplicação irá rodar em um browser
import {AppComponent} from './app.component'
import {FotoModule} from "./foto/foto.module";

@NgModule({
    imports: [BrowserModule, FotoModule], //Carrega os módulos necessários, parecido com a criação de módulos no angular 1.x
    declarations: [AppComponent], //Quais components esse módulo irá utilizar, o que faz parte dele
    bootstrap: [AppComponent] //Qual componente carrega primeiro
})
export class AppModule {

}