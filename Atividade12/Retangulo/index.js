const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const base = Number(document.getElementById('base').value)
    const altura = Number(document.getElementById('altura').value)

    if (base > 0 && altura > 0) {

        let objRet = new Retangulo(base,altura)

        objRet.area()

    }
    else{
        alert('Entrada Invalida')
    }

    form.reset()

});

function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.area = function () {
        alert(this.base * this.altura);
    };

}