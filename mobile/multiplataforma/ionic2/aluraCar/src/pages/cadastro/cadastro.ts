import {Component} from '@angular/core';
import {Alert, AlertController, NavController, NavParams} from 'ionic-angular';
import {Carro} from '../../domain/carro/carro';
import {Http} from '@angular/http';
import {HomePage} from '../home/home';
import {Agendamento} from '../../domain/agendamento/agendamento';

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
                private _http: Http,
                private _alertCtrl: AlertController) {

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

        if (!this.agendamento.nome || ! this.agendamento.endereco || !this.agendamento.email) {

            this._alertCtrl.create({
                title: 'Dados obrigatórios',
                subTitle: 'Por favor preencha todos os campos',
                buttons: [{ text: 'Ok'}]
            }).present();
            
            return;
        }

        this._http
            .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${this.agendamento.carro.nome}&nome=${this.agendamento.nome}&preco=${this.agendamento.valor}&endereco=${this.agendamento.endereco}&email=${this.agendamento.email}&dataAgendamento=${this.agendamento.data}`)
            .toPromise()
            .then(() => {
                this.alerta.setSubTitle('Atendimento agendado com sucesso');
                this.alerta.present();
            })
            .catch(erro => {
                this.alerta.setSubTitle('Falha ao agendar atendimento');
                this.alerta.present();
            });
    }
}
