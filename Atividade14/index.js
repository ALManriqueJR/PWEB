const option = document.getElementById('opt')

option.addEventListener('click', (event) => {
    event.preventDefault();

    let info = document.getElementById('info')
    let ma = document.getElementById('maiu')
    let mi = document.getElementById('mini')

    let test = info.value

    if (ma.checked)
        test = test.toUpperCase()

    if (mi.checked)
        test = test.toLowerCase()

    info.value = test

})