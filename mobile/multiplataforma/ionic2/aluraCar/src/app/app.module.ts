import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import {EscolhaPage} from '../pages/escolha/escolha';
import {CadastroPage} from '../pages/cadastro/cadastro';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        EscolhaPage,
        CadastroPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        EscolhaPage,
        CadastroPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
