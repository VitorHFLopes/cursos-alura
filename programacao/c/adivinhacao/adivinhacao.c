//essas bibliotecas foram usadas para:
#include <stdio.h> //Leitura das entradas de usuario e print na tela
#include <stdlib.h> //Uso das funcoes int rand() e void srand()
#include <time.h> //Uso da funcao time_t time()

int main() {

	// imprime cabecalho do nosso jogo
	printf("******************************************\n");
	printf("* Bem vindo ao nosso jogo de adivinhação *\n");
	printf("******************************************\n");

	int segundos = time(0);
	srand(segundos);

	int numerogrande = rand();

	int numerosecreto = numerogrande % 100;

	int chute;
	int tentativas = 1;

	double pontos = 1000;

	int acertou = 0;

	int nivel;
	printf("Qual o nível de dificuldade?\n");
	printf("(1) Fácil (2) Médio (3) Difícil\n\n");
	printf("Escolha: ");
	scanf("%d", &nivel);

	int numerotentativas;

	switch (nivel) {

		case 1:
			numerotentativas = 20;
			break;

		case 2:
			numerotentativas = 15;
			break;

		default:
			numerotentativas = 6;
	}

	for (int i = 1; i <= numerotentativas; i++) {

		printf("Tentativa %d\n", tentativas);
		
		printf("Qual é o seu chute? ");
		scanf("%d", &chute);
		printf("Seu chute foi %d\n", chute);

		if(chute < 0) {
			printf("Você não pode chutar números negativos!\n");
			continue;
		}

		int acertou = (chute == numerosecreto);
		int maior = chute > numerosecreto;

		if(acertou) {

			break;
		}

		else if(maior) {
			printf("Seu chute foi maior que o número secreto\n");
		} 

		else {
			printf("Seu chute foi menor que o número secreto\n");
		}

		tentativas++;

		double pontosperdidos = abs(chute - numerosecreto) / (double)2;
		pontos = pontos - pontosperdidos;
	}

	printf("Fim de jogo!\n");

	if (acertou) {
		printf("Parabéns! Você acertou!\n");

		printf("Você acertou em %d tentativas!\n", tentativas);
		printf("Total de pontos %.1f\n", pontos);
	} else {

		printf("Você perdeu! Tente de novo\n");
	}

}

/*
	%d -> adiciona uma variavel INT na string
	.n%f -> adiciona uma variavel DOUBLE na string, o .n é o numero de casas decimais no print
*/

