const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const first = document.getElementById('primeiro');

    const objFormNumbers = {
        primeiro: first.value,
        segundo: document.getElementById('segundo').value,
        terceiro: document.getElementById('terceiro').value,
    }

    Numbers(objFormNumbers);

    let palavra = document.getElementById('palavra').value;

    if (palavra !== '')
        boolPalind = Palindromo(palavra);
    else
        boolPalind = false;

    const palindromoBoard = document.getElementById('palindromo');

    if (boolPalind) {
        let palinBloco = `<div><h2>Palindromo Status</h2><br>É palindromo</div>`
        palindromoBoard.innerHTML = palinBloco;
    } else {
        let palinBloco = `<div><h2>Palindromo Status</h2><br>Não é palindromo</div>`
        palindromoBoard.innerHTML = palinBloco;
    }


    form.reset();
    first.focus();
});


function Palindromo(str) {

    let palavraTratada = str.toUpperCase().replace(/^a-z0-9/g, '');

    let arvalap = palavraTratada.split('').reverse().join('');

    return palavraTratada == arvalap;
}

function Numbers(arr) {

    //MAIOR
    let biggest = 0;

    if (arr.primeiro >= arr.segundo && arr.primeiro >= arr.terceiro) {
        biggest = arr.primeiro;
    } else if (arr.segundo >= arr.primeiro && arr.segundo >= arr.terceiro) {
        biggest = arr.segundo;
    } else {
        biggest = arr.terceiro;
    }

    const maiorBloco = document.getElementById('maior');
    let htmlMaior = `<h2>Maior Numero</h2><br>${biggest}</div>`
    maiorBloco.innerHTML = htmlMaior;

    // TRIANGULO
    let triangle;
    if (arr.primeiro == arr.segundo && arr.primeiro == arr.terceiro) {
        triangle = 'equilatero';
    } else if (arr.primeiro !== arr.segundo && arr.primeiro !== arr.terceiro && arr.segundo !== arr.terceiro) {
        triangle = 'escaleno';
    } else {
        triangle = 'isóceles';
    }

    const triagBloco = document.getElementById('triangulo');
    let htmlTriag = `<h2>Triangulo</h2><br>${triangle}</div>`
    triagBloco.innerHTML = htmlTriag;



    //CRESCENTE
    let inicio, meio;

    if (arr.primeiro == biggest) {
        if(arr.segundo >= arr.terceiro){
            meio = arr.segundo;
            inicio =arr.terceiro;
        }
        else{
            meio = arr.terceiro;
            inicio = arr.segundo;
        }   
    }
    if (arr.segundo == biggest) {
        if(arr.primeiro >= arr.terceiro){
            meio = arr.primeiro;
            inicio =arr.terceiro;
        }
        else{
            meio = arr.terceiro;
            inicio = arr.primeiro;
        }   
    }
    if (arr.terceiro == biggest) {
        if(arr.segundo >= arr.primeiro){
            meio = arr.segundo;
            inicio =arr.primeiro;
        }
        else{
            meio = arr.primeiro;
            inicio = arr.segundo;
        }   
    }

    const crescBloco = document.getElementById('crescente');
    let htmlCresc = `<h2>Crescente</h2><br>${inicio} ,${meio} ,${biggest}</div>`
    crescBloco.innerHTML = htmlCresc;
}