import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {AgendamentoPage} from '../pages/agendamento/agendamento';
import {LoginPage} from '../pages/login/login';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage = LoginPage;
    paginas = [{
        titulo: 'Agendamento', componente: AgendamentoPage
    }];
    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    abrePagina(pagina) {

        this.nav.push(pagina.componente);
    }
}
