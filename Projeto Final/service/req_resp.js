
export const Cadastrar = async (objTask) => {

    return await fetch('http://127.0.0.1:8000/cadCliente', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(objTask)
    })
};

export const getUser = async (objUser) => {
    return await fetch('http://127.0.0.1:8000/login', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(objUser)
    }).then((response) => {
        if (response.status == 200) {
            location.replace("../index.html")
        } else {
            alert('Erro!');
        }
    })
};