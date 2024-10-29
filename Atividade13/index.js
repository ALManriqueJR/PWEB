const janela = document.getElementById("janela")
let resp = document.getElementById('res');


janela.addEventListener('mouseenter', (event) => {

    janela.src = './assets/aberta.png'
    resp.innerHTML = `<h1>Janela Aberta</h1>`
});

janela.addEventListener('mouseout', (event) => {

    janela.src = './assets/fechada.png'
    resp.innerHTML = `<h1>Janela Fechada</h1>`
});

janela.addEventListener('click', (event) => {

    janela.src = './assets/quebrou.png'
    resp.innerHTML = `<h1>Janela Quebrada</h1>`

});