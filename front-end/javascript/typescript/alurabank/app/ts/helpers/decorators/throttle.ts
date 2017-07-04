//decorator de função
export function throttle(milisegundos: number = 500) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]) {

            if (event) event.preventDefault();

            clearInterval(timer);

            timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);
        };

        return descriptor;
    }
}

//target: instancia no qual o decorator do método foi colocado
//propertyKey: nome do método no qual o decorator está sendo colocado
//descriptor: Sabe tudo sobre o método que está sendo chamado

//descriptor.value: é o metodo no qual o decorator está sendo posicionado, toda lógica do método está aqui