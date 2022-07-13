function buscar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('idade');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Tente Novamente!')
    }else {
        var sex = document.getElementsByClassName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (sex[0].checked) {
            genero = 'Homem'
        } else if(sex[1].checked) {
            
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}