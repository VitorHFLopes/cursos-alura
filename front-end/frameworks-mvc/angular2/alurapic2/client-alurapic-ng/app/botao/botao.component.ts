import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Input() confirmacao: boolean = false;
    @Output() acao = new EventEmitter();

    //@Output() acao = new EventEmitter<string>(); É possível tipar os dados do evento, define o tipo do parametro do
    //construtor

    executaAcao() {

        if (!this.confirmacao) {

            return;
        }

        if (!confirm('Deseja excluir a foto?')) {

            return;
        }

        this.acao.emit();
    }
}