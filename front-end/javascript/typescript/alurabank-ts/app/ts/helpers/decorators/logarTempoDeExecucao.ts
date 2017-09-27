//decorator de função
export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]) {

            let unidade = 'ms';
            let divisor = 1;

            if (emSegundos) {

                unidade = 's';
                divisor = 1000;
            }

            console.log(`Parametros do método ${propertyKey} ${JSON.stringify(args)}`);

            const tempo1 = performance.now();

            //executa o método "da mesma forma" que o original, porém com a ação dos decorators
            const retorno = metodoOriginal.apply(this, args);

            const tempo2 = performance.now();
            console.log(`Acabou o método em ${(tempo2 - tempo1) / divisor} ${unidade}`);

            return retorno;
        };

        return descriptor;
    }
}

//target: instancia no qual o decorator do método foi colocado
//propertyKey: nome do método no qual o decorator está sendo colocado
//descriptor: Sabe tudo sobre o método que está sendo chamado

//descriptor.value: é o metodo no qual o decorator está sendo posicionado, toda lógica do método está aqui