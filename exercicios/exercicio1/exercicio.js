function carregar() {
var msg = document.getElementById('msg')
var img =  document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`


if (hora >= 0 && hora < 12){
    // Bom dia
    img.src = 'manha.jpg'
    document.body.style.background = '#72fc7d'
} else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#ffcf90'
} else {
    //Boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#231c7c'
}

}