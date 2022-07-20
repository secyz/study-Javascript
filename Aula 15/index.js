function busca() {
    let busca = document.getElementById('txtn')
    let res = document.getElementById('res')

    let per1 = 'alex'
    let per2 = 'marty'
    let per3 = 'gloria'
    let per4 = 'melman'

    if (busca.value.length == 0) {
        window.alert('Digite o nome do personagem!')
    } else {

        if (busca.value == per1) {
            res.innerHTML = `leão\uD83E\uDD81`

        }
    }

    if (busca.value == per2) {
        res.innerHTML = `zebra\uD83E\uDD93`
    }

    if (busca.value == per3) {

        res.innerHTML = `hipopotamo\uD83E\uDD9B `
    }

    if (busca.value == per4) {
        res.innerHTML = `girafa\uD83E\uDD92`
    }
}