import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Agendamento} from '../../domain/agendamento/agendamento';
import {AgendamentoDao} from '../../domain/agendamento/agendamento-dao';
import {AgendamentoService} from '../../domain/agendamento/agendamento.service';

@Component({
    selector: 'page-agendamento',
    templateUrl: './agendamento.html'
})
export class AgendamentoPage {

    agendamentos: Agendamento[];

    constructor(private _navParams: NavParams,
                private _navCtrl: NavController,
                private _alertCtrl: AlertController,
                private _agendamentoDao: AgendamentoDao,
                private _agendamentoService: AgendamentoService) {

        this._agendamentoDao
            .listaTodos()
            .then(agendamentos => this.agendamentos = agendamentos);
    }

    reenvia(agendamento: Agendamento) {

        if (!agendamento) {

            return;
        }

        this._agendamentoService
            .reenvia(agendamento)
            .then(confirmado => {
                confirmado ?
                    this._alertCtrl.create({
                        title: 'Dados reenviados',
                        subTitle: 'Sucesso',
                        buttons: [{text: 'Ok'}]
                    }).present() :
                    this._alertCtrl.create({
                        title: 'Falha ao reenviar',
                        subTitle: 'Por favor tente mais tarde',
                        buttons: [{text: 'Ok'}]
                    }).present();
            })
            .catch(error => {
                this._alertCtrl.create({
                    title: 'Falha ao reenviar',
                    subTitle: error,
                    buttons: [{text: 'Ok'}]
                }).present();
            });
    }
}
