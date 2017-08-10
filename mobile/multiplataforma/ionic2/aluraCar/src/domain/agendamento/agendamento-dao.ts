import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Agendamento} from './agendamento';

@Injectable()
export class AgendamentoDao {

    constructor(private _storage: Storage) {

    }

    private _getKey(agendamento: Agendamento): string {

        return agendamento.email + agendamento.data.substr(0, 10);
    }

    salva(agendamento: Agendamento): Promise<Storage> {

        const key = this._getKey(agendamento);

        return this._storage.set(key, agendamento);
    }

    ehAgendamentoDuplicado(agendamento: Agendamento): Promise<Storage> {

        const key = this._getKey(agendamento);

        return this._storage.get(key)
            .then(dado => {
                if (dado) {

                    return true;
                }
            });
    }
}