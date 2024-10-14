const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let objPerson =
    {
        altura: document.getElementById('altura').value,
        peso: document.getElementById('peso').value,
    }


    let resp = IMC(objPerson);
    
    const respBloco = document.getElementById('resposta');

    respBloco.innerHTML = resp;

});

function IMC(arr) {
    var p = parseFloat(arr.peso);
    var a = parseFloat(arr.altura);

    var imc = (p / Math.pow(a, 2));

    
        switch (imc) {
            case imc < 18.5:
                return ["Magreza", "O"];
            case imc < 25.0:
                return ["Normal", "O"];
            case imc < 30.0:
                return ["Sobrepeso", "I"];
            case imc < 40.0:
                return ["Obesidade", "II"];
            default:
                return ["Obesidade Grave", "III"];
        }
    
}