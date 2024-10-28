#include <stdio.h>

int fibon(int n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibon(n - 1) + fibon(n - 2);
}

int main() {
    int n = 0;
    printf("Digite um número: ");
    scanf("%d", &n);
    printf("Fibonacci(%d) = %d\n", n, fibon(n));

    return 0;
}
