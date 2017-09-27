import {NgModule} from '@angular/core'
import {FotoComponent} from './foto.component'
import {FiltroPorTitulo} from "./foto.pipes";
import {FotoService} from "./foto.service";

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], //Tudo que faz parte do módulo
    exports: [ FotoComponent, FiltroPorTitulo ], //O que será disponibilizado externamente ao módulo
    providers: [ FotoService ]
})

export class FotoModule {

}

//Não é possível exportar o foto service porque ele não é um component, um pipe, não possui um decorator do angular
//dizendo que ele é injetável.

//Quando quero disponibilizar algo sem ser do component, preciso adicionar na lista de providers do modulo, pro
//angular saber como importar