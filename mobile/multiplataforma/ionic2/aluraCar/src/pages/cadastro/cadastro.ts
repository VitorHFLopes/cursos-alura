import {Component} from '@angular/core';
import {Alert, AlertController, NavController, NavParams} from 'ionic-angular';
import {Carro} from '../../domain/carro/carro';
import {HomePage} from '../home/home';
import {Agendamento} from '../../domain/agendamento/agendamento';
import {AgendamentoService} from '../../domain/agendamento/agendamento.service';

@Component({
    templateUrl: './cadastro.html'
})
export class CadastroPage {

    carro: Carro;
    precoTotal: number;

    agendamento: Agendamento;
    alerta: Alert;

    constructor(private _navParams: NavParams,
                private _navCtrl: NavController,
                private _alertCtrl: AlertController,
                private agendamentoService: AgendamentoService) {

        this.carro = this._navParams.get('carro');
        this.precoTotal = this._navParams.get('precoTotal');
        this.alerta = this._alertCtrl.create({
            title: 'Finalizar atendimento',
            buttons: [{
                text: 'Ok',
                handler: () => {
                    this._navCtrl.setRoot(HomePage);
                }
            }]
        });
        this.agendamento = new Agendamento(this.carro, this.precoTotal);
    }

    finalizaAtendimento() {

        if (!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email) {

            this._alertCtrl.create({
                title: 'Dados obrigatórios',
                subTitle: 'Por favor preencha todos os campos',
                buttons: [{text: 'Ok'}]
            }).present();

            return;
        }

        this.agendamentoService
            .agenda(this.agendamento)
            .then(confirmado => {
                confirmado ?
                    this.alerta.setSubTitle('Agendamento realizado com sucesso!') :
                    this.alerta.setSubTitle('Não foi possível realizar o agendamento. Tente mais tarde');
                this.alerta.present();
            })
            .catch(error => {
                this.alerta.setSubTitle(error.message);
                this.alerta.present();
            });
    }
}
