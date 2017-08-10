import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import {UsuarioService} from '../../domain/usuario/usuario.service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    public email: string = 'joao@alura.com.br';
    public senha: string = 'alura123';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private _usuarioService: UsuarioService,
                private _alertCtrl: AlertController) {}

    efetuaLogin() {

        this._usuarioService
            .efetuaLogin(this.email, this.senha)
            .then(usuario => this.navCtrl.setRoot(HomePage))
            .catch(() => {
                this._alertCtrl.create({
                    title: 'Login',
                    subTitle: 'Falha ao logar',
                    buttons: [{text: 'Ok'}]
                }).present();
            });

    }
}