import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FotoService} from "../foto/foto.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    _foto: FotoComponent = new FotoComponent();
    _cadastroForm: FormGroup;
    _service: FotoService;
    _route: ActivatedRoute;
    _router: Router;

    constructor(service: FotoService, formBuilder: FormBuilder, route: ActivatedRoute, router: Router) {

        this._service = service;

        //É o roteador, ou seja, o responsável por direcionar a navegação da aplicação
        this._router = router;

        //Retorna a rota ativa no momento da instancia
        this._route = route;
        this._route.params.subscribe(params => {

            let id = params['id'];

            if (!id) {

                return;
            }

            this._service
                .buscaPorId(id)
                .subscribe(foto => {

                    this._foto = foto;
                }, error => console.error(error));
        });

        this._cadastroForm = formBuilder.group({

            //Validators define as validações necessárias do input
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {

        event.preventDefault();

            this._service
                .cadastra(this._foto)
                .subscribe(() => {

                this._router.navigate(['']);
                this._foto = new FotoComponent();
            }, error => console.error(error));
    }
}

//Cuidado ao definir uma const, as vezes não aparece erro, porém o código não funciona. No caso eu tentei deixar o
//headers como 'const', porém ja atribui o .append nele, o que gerou o conflito, porém não apontou erro