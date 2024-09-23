

document.getElementById('go').addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);

    let escolha = document.getElementById('escolha');

    let computerTurn = Jokenpo();
    escolha = escolha.value;

    const pbloco = document.getElementById('resultado');

    alert(`Você escolheu ${escolha} e o computador ${computerTurn}`);

    if (escolha === computerTurn) {
        pbloco.innerHTML = 'Empate';
    }

    escolha = ConvertSymbolToNumber(escolha);
    computerTurn = ConvertSymbolToNumber(computerTurn);

    console.log("Escolha convertido: " + escolha);
    console.log("computer convertido: " + computerTurn);

    if (escolha === -1) {
        console.log('Erro!');
    }
    
    //PEDRA = 1 ; PAPEL = 2 ; TESOURA = 3
    //11, 22, 33

    //CONDIÇÕES DE VITORIA
    //13,21,32

    //CONDIÇÕES DE DERROTA
    //31,12,23

    if ((escolha === 1 && computerTurn === 3) || (escolha === 2 && computerTurn === 1) || (escolha === 3 && computerTurn === 2)){
        pbloco.innerHTML = 'Você ganhou!!!';
    }

    if ((escolha === 3 && computerTurn === 1) || (escolha === 1 && computerTurn === 2) || (escolha === 2 && computerTurn === 3)){
        pbloco.innerHTML = 'Você perdeu';
    }

});

function Jokenpo() {
    let escolha = Math.random() * (3 - 1) + 1;

    escolha = escolha.toFixed(0);

    escolha = parseInt(escolha);

    switch (escolha) {
        case 1:
            return 'Pedra';
        case 2:
            return 'Papel';
        case 3:
            return 'Tesoura';
        default:
            return console.log('Erro');            
    }
};

function ConvertSymbolToNumber(opt) {
  
    if (opt == "Pedra") {
        return 1;
    } else if (opt == "Papel") {
        return 2;
    } else if (opt == "Tesoura") {
        return 3;
    }

    return -1;

};