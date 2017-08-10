import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {MyApp} from './app.component';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import {HomePage} from '../pages/home/home';
import {EscolhaPage} from '../pages/escolha/escolha';
import {CadastroPage} from '../pages/cadastro/cadastro';
import {AgendamentoPage} from '../pages/agendamento/agendamento';
import {LoginPage} from '../pages/login/login';

import {AgendamentoDao} from '../domain/agendamento/agendamento-dao';

import {AgendamentoService} from '../domain/agendamento/agendamento.service';
import {UsuarioService} from '../domain/usuario/usuario.service';

function provideStorage() {

    return new Storage(['indexeddb'], {
        name: 'aluracar',
        storeName: 'agendamentos'
    });
}

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        EscolhaPage,
        CadastroPage,
        AgendamentoPage,
        LoginPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [
        IonicApp
    ],
    entryComponents: [
        MyApp,
        HomePage,
        EscolhaPage,
        CadastroPage,
        AgendamentoPage,
        LoginPage
    ],
    providers: [
        AgendamentoService,
        AgendamentoDao,
        UsuarioService,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        },
        {
            provide: Storage,
            useFactory: provideStorage
        }
    ]
})
export class AppModule {
}
