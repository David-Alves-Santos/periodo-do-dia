
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 0 && hora < 12){
    img.src = './img/manhã.png'
    window.document.body.style.background = '#cdbc85'
    } else if ( hora >= 12 && hora <18){
        img.src = './img/tarde.png'
        window.document.body.style.background='#f5a84c'
    } else {
        img.src = './img/noite.png'
        window.document.body.style.background='#050f18'
    }
}
