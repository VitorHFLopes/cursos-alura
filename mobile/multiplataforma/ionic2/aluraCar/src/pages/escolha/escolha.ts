import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Carro} from '../../domain/carro/carro';
import {Acessorio} from '../../domain/carro/acessorio';
import {CadastroPage} from '../cadastro/cadastro';

@Component({
    templateUrl: './escolha.html'
})

export class EscolhaPage implements OnInit {

    carro: Carro;
    acessorios: Acessorio[];
    private _valorTotal: number;

    constructor(private _navCtrl: NavController,
                public navParams: NavParams)
    {

        this.acessorios = [
            new Acessorio('Freio ABS', 800),
            new Acessorio('Ar-condicionado', 1000),
            new Acessorio('MP3 Player', 500)
        ];
        this.carro = this.navParams.get('carroSelecionado');
        this._valorTotal = this.carro.preco;
    }

    ngOnInit() {

    }

    get valorTotal() {

        return this._valorTotal;
    }

    atualizaTotal(ehSelecionado: boolean, acessorio: Acessorio) {

        if (ehSelecionado) {

            this._valorTotal += acessorio.preco;
            return;
        }

        this._valorTotal -= acessorio.preco;
    }

    avancaNoAgendamento() {

        this._navCtrl.push(CadastroPage, {
            carro: this.carro,
            precoTotal: this._valorTotal
        });
    }
}
