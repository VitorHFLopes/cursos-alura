import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import {EscolhaPage} from '../escolha/escolha';
import {Carro} from '../../domain/carro/carro';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    carros: Carro[];

    constructor(public navCtrl: NavController,
                private _http: Http,
                private _loadingCtrl: LoadingController,
                private _alertCtrl: AlertController) {
    }

    ngOnInit(): void {

        let loader = this._loadingCtrl.create({
            content: 'Guentae, ta carregando'
        });

        loader.present();

        this._http
            .get('https://aluracar.herokuapp.com')
            .map(response => response.json())
            .toPromise()
            .then(carros => {

                loader.dismiss();
                this.carros = carros;
            })
            .catch(error => {

                console.error(error);
                loader.dismiss();
                this._alertCtrl.create({
                    title: 'Não carregou',
                    subTitle: 'Não foi possível carregar os carros',
                    buttons: [{
                        text: 'OK'
                    }]
                }).present();
            });
    }

    seleciona(carro: Carro) {

        this.navCtrl.push(EscolhaPage, {carroSelecionado: carro})
    }
}
