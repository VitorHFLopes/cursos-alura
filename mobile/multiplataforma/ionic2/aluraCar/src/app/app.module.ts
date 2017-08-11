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
import {PerfilPage} from '../pages/perfil/perfil';

import {AgendamentoDao} from '../domain/agendamento/agendamento-dao';

import {AgendamentoService} from '../domain/agendamento/agendamento.service';
import {UsuarioService} from '../domain/usuario/usuario.service';

import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera';

function provideStorage() {

    return new Storage({
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
        LoginPage,
        PerfilPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
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
        LoginPage,
        PerfilPage
    ],
    providers: [
        AgendamentoService,
        AgendamentoDao,
        UsuarioService,
        SplashScreen,
        StatusBar,
        Vibration,
        Camera,
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
