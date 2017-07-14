import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser" //Indica que a aplicação irá rodar em um browser
import {AppComponent} from "./app.component"
import {FotoModule} from "./foto/foto.module";
import {HttpModule} from "@angular/http";
import "rxjs/add/operator/map"
import {PainelModule} from "./painel/painel.module";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {ListagemComponent} from "./listagem/listagem.component";
import {routing} from "./app.routes";

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