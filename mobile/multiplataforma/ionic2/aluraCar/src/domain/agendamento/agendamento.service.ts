import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Agendamento} from './agendamento';
import {AgendamentoDao} from './agendamento-dao';

@Injectable()
export class AgendamentoService {

    constructor(private _http: Http,
                private _agendamentoDao: AgendamentoDao) {
    }

    montaUrl(agendamento: Agendamento): string {

        return `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
    }

    agenda(agendamento: Agendamento) {

        const apiUrl = this.montaUrl(agendamento);

        return this._agendamentoDao.ehAgendamentoDuplicado(agendamento)
            .then(ehDuplicado => {

                if (ehDuplicado) {

                    throw new Error('Já existe o item');
                }

                return this._http
                    .get(apiUrl)
                    .toPromise()
                    .then(() => agendamento.confirmado = true, error => console.error(error))
                    .then(() => this._agendamentoDao.salva(agendamento))
                    .then(() => agendamento.confirmado);
            })
    }

    reenvia(agendamento: Agendamento) {

        const apiUrl = this.montaUrl(agendamento);

        return this._http
            .get(apiUrl)
            .toPromise()
            .then(() => agendamento.confirmado = true, error => console.error(error))
            .then(() => this._agendamentoDao.salva(agendamento))
            .then(() => agendamento.confirmado);
    }
}
