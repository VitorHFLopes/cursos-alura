System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divisor = 1;
                if (emSegundos) {
                    unidade = 's';
                    divisor = 1000;
                }
                console.log(`Parametros do método ${propertyKey} ${JSON.stringify(args)}`);
                const tempo1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const tempo2 = performance.now();
                console.log(`Acabou o método em ${(tempo2 - tempo1) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
