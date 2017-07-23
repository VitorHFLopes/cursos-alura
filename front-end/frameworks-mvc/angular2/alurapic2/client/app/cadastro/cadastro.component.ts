import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FotoService} from "../foto/foto.service";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    _foto: FotoComponent = new FotoComponent();
    _cadastroForm: FormGroup;
    _service: FotoService;

    constructor(service: FotoService, formBuilder: FormBuilder) {

        this._cadastroForm = formBuilder.group({
            //Validators define as validações necessárias do input
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
        this._service = service;
    }

    cadastrar(event) {

        event.preventDefault();

            this._service
                .cadastra(this._foto)
                .subscribe(() => {

                this._foto = new FotoComponent();
            }, error => console.error(error));
    }
}

//Cuidado ao definir uma const, as vezes não aparece erro, porém o código não funciona. No caso eu tentei deixar o
//headers como 'const', porém ja atribui o .append nele, o que gerou o conflito, porém não apontou erro