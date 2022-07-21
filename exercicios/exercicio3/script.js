
let valor = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')

let valores = []

function isNumero(n) {
if (Number(n) >=1 && Number(n) <=100) {
    return true
} else {
    return false
}
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}
function adicionar() {

    if (valor.value > 1 && valor.value <=100 ) {

        valores.push(Number(valor.value))
        let item = document.createElement('option')
        item.text = `Valor ${valor.value} adicionado`
        lista.appendChild(item)
    }
    if (valor.value.length == 0) {
        window.alert(' [ERRO] Você precisa adicionar um valor !')
    }

    if (valor.value  > 100 || valor.value <= 0) {

        window.alert(' [ERRO] O valor deve ser maior que 0 e menor que 100 !')

        if (valor.value == lista.value) {
            window.alert('[ERRO] Este número ja está na lista !')
        }

        if (!isLista(valor.value, valores) == lista.value) {
            window.alert('Valor ja adicionado')
        } else {
            window.alert('Valor ja adicionado')
        }
    }


}
