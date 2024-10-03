const formulario = document.getElementById("formulario");

let pessoa = { idade: 0, sexo: 'M', opt: 0 }
let grupo = []

let smallNumber;

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let idade = document.getElementById('idade');

    pessoa = {
        idade: parseInt(idade.value),
        sexo: document.querySelector('input[name="Sexo"]:checked').value,
        opt: parseInt(document.getElementById('voto').value)
    }

    grupo.push(pessoa);

    refreshData(grupo);

    formulario.reset();

    idade.focus();

});


function refreshData(arr) {
    const mediaBoard = document.getElementById('mediaBoard');
    let media = Media(arr);
    let mediaBloco = `<div id='media'><h2>Média das Idades</h2><br>${media}</div>`
    mediaBoard.innerHTML = mediaBloco;

    const oldestBoard = document.getElementById('oldestBoard');
    let bigNumber = Biggest(arr);
    let maiorBloco = `<div id='maior'><h2>Maior Idade Coletada</h2><br>${bigNumber}</div>`
    oldestBoard.innerHTML = maiorBloco;

    const newestBoard = document.getElementById('newestBoard');
    let smallNumber = Smallest(arr);
    let menorBloco = `<div id='menor'><h2>Menor Idade Coletada</h2><br>${smallNumber}</div>`
    newestBoard.innerHTML = menorBloco;

    const worstBoard = document.getElementById('worstReviewCounter');
    let worstQtt = Worst(arr);
    let piorBloco = `<div id='pior'><h2>Quantia de Péssimos no Review</h2><br>${worstQtt}</div>`
    worstBoard.innerHTML = piorBloco;

    const goodNGreatBoard = document.getElementById('percentGoodNGreat');
    let ggNumber = GGPercent(arr);
    let porcentBloco = `<div id='bomOtimoPorcent'><h2>Porcentagem de Bons e Otimos</h2><br>${ggNumber * 100}%</div>`
    goodNGreatBoard.innerHTML = porcentBloco;

    const sexMorF = document.getElementById('menAndWomen');
    let sexM = ManPercent(arr);
    let SexPercentBloco = `<div id='sex'><h2>Porcentagem de Homens E Mulheres</h2><br>Homens: ${sexM * 100}% E Mulheres: ${(1 - sexM) * 100}%</div>`
    sexMorF.innerHTML = SexPercentBloco;

}

function Media(a) {
    let idades = a.map(obj => obj.idade);
    let soma = idades.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let tam = idades.length;

    return (soma / tam);
}

function Biggest(a) {

    let biggest = Math.max(...a.map(obj => obj.idade));

    return biggest;
}

function Smallest(a) {

    let smallest = Math.min(...a.map(obj => obj.idade));

    return smallest;
}

function Worst(a) {

    let worstCount = a.filter(obj => obj.opt == 1).length;

    return worstCount;
}

function GGPercent(a) {

    let bom = a.filter(obj => obj.opt == 3).length;
    let otimo = a.filter(obj => obj.opt == 4).length;

    return ((bom + otimo) / a.length);
}

function ManPercent(a) { 
    let Male = a.filter(obj => obj.sexo == 'M').length;

    return (Male / a.length);
}