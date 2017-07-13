import {platformBrowserDynamic} from '@angular/platform-browser-dynamic' //Carrega o primeiro módulo da aplicação
import {AppModule} from './app.module'

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);