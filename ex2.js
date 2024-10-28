function verificarLetraA(texto) {

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a' || texto[i] === 'A') {
            contador++;
        }
    }

    if (contador > 0) {
        console.log(`A letra 'a' aparece ${contador} vezes.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

const texto = "Aqui tem um a minusculo e tres As maisculos A totalizando 8 a's";
verificarLetraA(texto);
