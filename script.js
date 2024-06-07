document.getElementById("verificar-btn").addEventListener("click", function() {
    try {
        let numero = parseInt(document.getElementById("numero").value);

        // Verifica se é primo ou composto
        let resultado = (fatoracaoNumerosPrimos(numero).length > 1) ? `${numero} é composto.<br>` : `${numero} é primo.<br>`;

        // Verifica se é divisível por 2
        resultado += (numero % 2 === 0) ? `${numero} é par.<br>` : `${numero} é ímpar.<br>`;

        // Verifica se é múltiplo de 3
        resultado += (numero % 3 === 0) ? `${numero} é múltiplo de 3.<br>` : `${numero} não é múltiplo de 3.<br>`;

        // Calcula o MDC e o MMC com outro número (por exemplo, 10)
        let outroNumero = 10;
        let mdc = calcularMDC(numero, outroNumero);
        let mmc = calcularMMC(numero, outroNumero);
        resultado += `MDC(${numero}, ${outroNumero}) = ${mdc}<br>`;
        resultado += `MMC(${numero}, ${outroNumero}) = ${mmc}<br>`;

        // Fatoração dos números
        let fatores = fatoracaoNumerosPrimos(numero);
        resultado += `Fatores primos de ${numero}: ${fatores.join(', ')}`;

        document.getElementById("resultado").innerHTML = resultado;
    } catch (error) {
        document.getElementById("resultado").innerHTML = "Insira um número válido!";
    }
});

// Função para fatorar números primos
function fatoracaoNumerosPrimos(numero) {
    let fatoresPrimos = [];
    let divisor = 2;

    while (numero > 1) {
        while (numero % divisor === 0) {
            fatoresPrimos.push(divisor);
            numero /= divisor;
        }
        divisor++;
    }

    return fatoresPrimos;
}

// Função para calcular o MDC (Máximo Divisor Comum)
function calcularMDC(numero1, numero2) {
    while (numero2 !== 0) {
        let temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }
    return numero1;
}

// Função para calcular o MMC (Mínimo Múltiplo Comum)
function calcularMMC(numero1, numero2) {
    return (numero1 * numero2) / calcularMDC(numero1, numero2);
}
