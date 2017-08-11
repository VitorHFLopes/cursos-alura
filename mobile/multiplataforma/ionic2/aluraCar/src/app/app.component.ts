import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AgendamentoPage} from '../pages/agendamento/agendamento';
import {LoginPage} from '../pages/login/login';
import {PerfilPage} from '../pages/perfil/perfil';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage = LoginPage;
    paginas = [
        {
            titulo: 'Agendamento', componente: AgendamentoPage,
        },
        {
            titulo: 'Perfil', componente: PerfilPage
        }
    ];
    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform,
                public splashScreen: SplashScreen,
                public statusBar: StatusBar) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    abrePagina(pagina) {

        this.nav.push(pagina.componente);
    }
}
