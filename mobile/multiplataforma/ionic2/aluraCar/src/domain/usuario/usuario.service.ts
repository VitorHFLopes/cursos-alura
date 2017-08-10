import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Usuario} from './usuario';

@Injectable()
export class UsuarioService {

    private _usuarioLogado: Usuario;

    constructor(private _http: Http) {

    }

    efetuaLogin(email: string, senha: string) {

        const apiUrl = `https://aluracar.herokuapp.com/login?email=${email}&senha=${senha}`;

        return this._http
            .get(apiUrl)
            .map(response => response.json().usuario)
            .toPromise()
            .then((dado: Usuario) => {

                let usuario = new Usuario(dado.nome, dado.dataNascimento, dado.email, dado.telefone);
                this._usuarioLogado = usuario;
                return usuario;
            });
    }

    obtemUsuarioLogado() {

        return this._usuarioLogado;
    }
}