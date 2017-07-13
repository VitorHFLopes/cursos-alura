import {NgModule} from '@angular/core'
import {FotoComponent} from './foto.component'

@NgModule({
    declarations: [ FotoComponent ], //Tudo que faz parte do módulo
    exports: [ FotoComponent ] //O que será disponibilizado externamente ao módulo
})
export class FotoModule {

}