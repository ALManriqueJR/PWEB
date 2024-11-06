import { Cadastrar } from "./service/req_resp.js";

const grid = document.getElementById('grid');
const nuvem = document.getElementById('nuvem');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');
const card = document.getElementById('card');


const todo = document.getElementById('todo-resp');
const andam = document.getElementById('andamento-resp');
const done = document.getElementById('done-resp');

let colunmValue = -1;
let id = 1;
let alterid = false;

let tarefas = [];

let dataAtual = []
let data = new Date();
dataAtual.push(Number(data.getFullYear()));
dataAtual.push(zeroAEsqnator(Number(data.getMonth() + 1)));
dataAtual.push(zeroAEsqnator(Number(data.getDate())));
let hoje = dataAtual.join('-');		




closeModalButton.addEventListener('click', () => {
    card.reset();
    modal.style.display = 'none';
});


grid.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.name == 'todo-list') {
        colunmValue = 1;
        modal.style.display = 'block';
    } else if (event.target.name == 'andamento-list') {
        colunmValue = 2;
        modal.style.display = 'block';
    } else if (event.target.name == 'done-list') {
        colunmValue = 3;
        modal.style.display = 'block';
    }
});


card.addEventListener('submit', async (event) => {
    event.preventDefault();

    cardCreate(alterid);
});


nuvem.addEventListener('click', (event) => {
    event.preventDefault();

    tarefas.forEach(async objTarefaIndividual => {
        await Cadastrar(objTarefaIndividual);
    });

});


document.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    const card = event.target.closest('.card');

    if (card) {
        const contextMenu = document.getElementById('contextMenu');

        contextMenu.style.display = 'block';
        contextMenu.style.top = `${event.pageY}px`;
        contextMenu.style.left = `${event.pageX}px`;

        contextMenu.dataset.cardId = card.id;

    } else {
        document.getElementById('contextMenu').style.display = 'none';
    }
});


document.addEventListener('click', () => {
    document.getElementById('contextMenu').style.display = 'none';
});


document.getElementById('editOption').addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
    const cardId = document.getElementById('contextMenu').dataset.cardId;
    alterid = editCard(cardId);

});

function editCard(idEd) {
    const card = document.getElementById(idEd);

    const descriptionText = card.querySelector('p').textContent;

    const prio = card.querySelectorAll('div')[0].textContent;
    const titleDat = card.querySelectorAll('div')[1].querySelector('h3').textContent
    let arrSplit = titleDat.split(' ');

    console.log(titleDat);

    setTimeout(() => {
        const titulo = document.getElementById('cardTitle');
        const desc = document.getElementById('cardDescription');
        const pri = document.getElementById('opt');
        const dataField = document.getElementById('data');


        let tipoPrio = 1;

        if (prio === 'Media')
            tipoPrio = 2;

        if (prio === 'Alta')
            tipoPrio = 3;


        titulo.value = arrSplit[0];
        desc.value = descriptionText;
        pri.value = tipoPrio;
        dataField.value = dataConversor(arrSplit[1]);

    }, 100);

    return idEd;

}

document.getElementById('deleteOption').addEventListener('click', () => {
    const cardId = document.getElementById('contextMenu').dataset.cardId;
    excluirCard(cardId);
});


function excluirCard(id) {
    const card = document.getElementById(id);
    card.remove();
    alterid = false;
}

function cardCreate(alterid) {

    const title = document.getElementById('cardTitle').value;
    const description = document.getElementById('cardDescription').value;
    const dataCard = document.getElementById('data').value;
    const priority = document.getElementById('opt').value;

    let objTask =
    {
        titulo: document.getElementById('cardTitle').value,
        prioridade: document.getElementById('opt').value,
        data: document.getElementById('data').value,
        descricao: document.getElementById('cardDescription').value,

    }

    let dataFormated = dataConversor(dataCard);
    let dias = qtdDias(dataCard,hoje);
    let sty = '';
    if(dias != -1 && dias <= 7){
        sty = `style="border: 1px solid red;"`;
    }

    let opt;
    let desc;

    let board;

    switch (Number(priority)) {
        case 0:
            opt = `<div></div>`;
            break;
        case 1:
            opt = `<div class="ribbon ribbon-baixa">Baixa</div>`;
            break;
        case 2:
            opt = `<div class="ribbon ribbon-mediana">Media</div>`;
            break;
        case 3:
            opt = `<div class="ribbon ribbon-alta">Alta</div>`;
            break;
    }


    if (description.length > 25) {
        desc = `<p>${description.slice(0, 24)}...</p>`
    }
    else {
        desc = `<p>${description}</p>`
    }


    switch (colunmValue) {

        case 1:
            board = todo;
            break;
        case 2:
            board = andam;
            break;
        case 3:
            board = done;
            break;

    }

    if (alterid) {
        excluirCard(alterid);
    }

    board.innerHTML += `
            <div class="card edit" draggable="true" ondragstart="drag(event)" id="${id}">
                ${opt}
                <div class="card-body">
                    <h3 class="card-title" ${sty}>${title} ${dataFormated}</h3>
                    ${desc}
                </div>
            </div>
            `;

    tarefas.push(objTask);
    id++;
    card.reset();
    modal.style.display = 'none';
    return;

}


function dataConversor(dt) {

    let dataSeparada = []

    if (dt.includes('/')) {
        dataSeparada = dt.split('/');
        dataSeparada = dataSeparada.reverse();
        return dataSeparada.join('-');
    }

    if (dt.includes('-')) {
        dataSeparada = dt.split('-');
        dataSeparada = dataSeparada.reverse();
        return dataSeparada.join('/');
    }

}


function zeroAEsqnator(num){
    return num.toString().padStart(2, '0');
}

		
function qtdDias(r,h){
		
    let raw = Date.parse(r);
    let hoje = Date.parse(h);

    if(raw >= hoje){
        let diff = raw - hoje;
        if(!isNaN(diff)){
            return (Math.round(diff)/86400000);
        }
    }
    
    return -1;
}