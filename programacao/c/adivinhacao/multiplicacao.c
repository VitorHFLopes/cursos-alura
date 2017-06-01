#include <stdio.h>

int main() {

	int x;
	int y;

	printf("Digite o valor de x: ");
    scanf("%d", &x);

    printf("Digite o valor de y: ");
    scanf("%d", &y);

    int total = x * y;

    printf("Multiplicando %d com %d têm se: %d\n", x, y, total);
}