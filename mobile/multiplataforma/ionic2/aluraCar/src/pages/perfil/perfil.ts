import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Agendamento} from '../../domain/agendamento/agendamento';
import {UsuarioService} from '../../domain/usuario/usuario.service';
import {Usuario} from '../../domain/usuario/usuario';

@Component({
    selector: 'page-perfil',
    templateUrl: './perfil.html'
})
export class PerfilPage {

    agendamentos: Agendamento[];

    constructor(private _navParams: NavParams,
                private _navCtrl: NavController,
                private _usuarioService: UsuarioService) {
    }

    obterUsuarioLogado(): Usuario {

        return this._usuarioService.obtemUsuarioLogado();
    }

}
