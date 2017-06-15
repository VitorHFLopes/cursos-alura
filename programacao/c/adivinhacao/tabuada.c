#include <stdio.h>

int main() {

	int tabuada;
	int resultado;

	printf("Insira qual tabuada deseja imprimir\n");
	scanf("%d", &tabuada);

	int numerotabuada = 1;
	printf("Tabuada do %d\n", tabuada);

	while(numerotabuada <= 10) {

		resultado = tabuada * numerotabuada;
		printf("%d\n", resultado);

		numerotabuada++;
	}
}