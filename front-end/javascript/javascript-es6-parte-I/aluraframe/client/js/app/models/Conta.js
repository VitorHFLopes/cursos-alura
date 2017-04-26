class Conta {

    constructor(saldo) {

        this._saldo = saldo;
    }

    atualiza(taxa) {

        //lança-se uma exceção caso o método não tenha sido implementado
        throw new Error('É necessário implementar este método nas classes filhas');
    }

    getSaldo() {

        return this._saldo;
    }
}

class ContaCorrente extends Conta {

    atualiza(taxa) {

        this._saldo = this._saldo + taxa;
    }
}

class ContaPoupanca extends Conta {

    atualiza(taxa) {

        this._saldo = this._saldo + (taxa * 2);
    }
}