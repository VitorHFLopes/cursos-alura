#include <stdio.h>

int main() {

    /*for (int i = 0; i <= 100; i++) {

        printf("%d\n", i);
    }*/

    int numero = 1;
    int soma = 0;

    while (numero <= 100) {
        
        soma = soma + numero;
        numero++;
    }

    printf("%d\n", soma);

    /*int soma = 0;
    for(int i = 1; i <= 100; i++) {
        soma = soma + i;
    }

    printf("A soma eh %d\n", soma);*/
}