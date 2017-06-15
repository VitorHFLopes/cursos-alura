#include <stdio.h>

int main()
{
	int operacao;
	int x;
	int y;
	int resultado;

	printf("Qual operação você deseja realizar?\n");
	printf("SOMA = 1\n");
	printf("SUBTRAÇÃO = 2\n");
	printf("DIVISÃO = 3\n");
	printf("MULTIPLICAÇÃO = 4\n");
	scanf("%d: ", &operacao);

	printf("Insira o valor de x: ");
	scanf("%d", &x);

	printf("Insira o valor de y: ");
	scanf("%d", &y);

	if (operacao == 1) {

		resultado = x + y;
	} else if (operacao == 2) {
		
		resultado = x - y;
	} else if (operacao == 3) {
		
		resultado = x / y;
	} else if (operacao == 4) {

		resultado = x * y;
	}

	printf("O resultado é %d\n", resultado);
}