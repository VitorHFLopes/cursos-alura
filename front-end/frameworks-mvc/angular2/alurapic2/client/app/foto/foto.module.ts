import {NgModule} from '@angular/core'
import {FotoComponent} from './foto.component'
import {FiltroPorTitulo} from "./foto.pipes";

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], //Tudo que faz parte do módulo
    exports: [ FotoComponent, FiltroPorTitulo ] //O que será disponibilizado externamente ao módulo
})
export class FotoModule {

}