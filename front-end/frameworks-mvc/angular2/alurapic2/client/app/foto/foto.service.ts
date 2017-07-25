import {Http, Headers, Response} from "@angular/http";
import {FotoComponent} from "./foto.component";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastra(foto: FotoComponent): Observable<MensagemCadastro> {

        if (foto._id) {

            return this.http
                .put(this.url + '/' + foto._id, JSON.stringify(foto), {headers: this.headers})
                .map(response => new MensagemCadastro('Foto atualizada com sucesso', true));
        }

        return this.http
            .post(this.url, JSON.stringify(foto), {headers: this.headers})
            .map(response => new MensagemCadastro('Foto incluida com sucesso', false));
    }

    lista(): Observable<FotoComponent[]> {

        return this.http
            .get(this.url)
            .map(response => response.json());
    }

    remove(foto: FotoComponent): Observable<Response> {

        return this.http
            .delete(this.url + '/' + foto._id);
    }

    buscaPorId(id: string): Observable<FotoComponent> {

        return this.http
            .get(this.url + '/' + id)
            .map(response => response.json());
    }
}

class MensagemCadastro {

    private _mensagem: string = '';
    private _inclusao: boolean = false;

    constructor(mensagem: string, inclusao: boolean) {

        this._mensagem = mensagem;
        this._inclusao = inclusao;
    }

    public getMensagem(): string {

        return this._mensagem;
    }

    public ehInclusao(): boolean {

        return this._inclusao;
    }
}