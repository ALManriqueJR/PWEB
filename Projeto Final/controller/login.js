import { getUser } from "../service/req_resp.js";

const form = document.getElementById('wrapper');

const esq = document.getElementById('esqueci');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let objLogin = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value
    }

    getUser(objLogin);

});

esq.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Entre em contato com o ADM : 4002-8922')
})