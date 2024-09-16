// 1) Média

nome = prompt("Qual é o seu nome?");

var media = function () {
    const n = 4;
    let somar = 0;

    for (let i = 0; i < n; i++) {
        somar += parseFloat(prompt("Digite numero"));
    }

    return (somar / n);
}

alert(`A média de ${nome} é : ${media().toFixed(2)}`);