function sobreMim(){
    var titulo=document.getElementById('titulo')
    var player=document.getElementById('estilo-player')
    var sobre=document.getElementById('estilo-sobre')
    var textoSobre=document.getElementById('sobre')
    var habilidades=document.getElementById('estilo-hab')
    var hab1=document.getElementById('hab1')
    var hab2=document.getElementById('hab2')
    var hab3=document.getElementById('hab3')
    var portfolio=document.getElementById('estilo-port')
    var port1=document.getElementById('port1')
    var port2=document.getElementById('port2')
    var radios=document.getElementById('radios')
    var voltar=document.getElementById('voltar')
    var card1=document.getElementById('card1')
    var card2=document.getElementById('card2')
    var card3=document.getElementById('card3')
    titulo.style.display='none'
    player.style.display='none'
    sobre.style.display='flex'
    textoSobre.style.display='flex'
    habilidades.style.display='none'
    hab1.style.display='none'
    hab2.style.display='none'
    hab3.style.display='none'
    portfolio.style.display='none'
    port1.style.display='none'
    port2.style.display='none'
    radios.style.display='flex'
    voltar.style.display='block'
    card1.checked=true
    card2.checked=false
    card3.checked=false
}
function habilidades(){
    var titulo=document.getElementById('titulo')
    var player=document.getElementById('estilo-player')
    var sobre=document.getElementById('estilo-sobre')
    var textoSobre=document.getElementById('sobre')
    var habilidades=document.getElementById('estilo-hab')
    var hab1=document.getElementById('hab1')
    var hab2=document.getElementById('hab2')
    var hab3=document.getElementById('hab3')
    var portfolio=document.getElementById('estilo-port')
    var port1=document.getElementById('port1')
    var port2=document.getElementById('port2')
    var radios=document.getElementById('radios')
    var voltar=document.getElementById('voltar')
    var card1=document.getElementById('card1')
    var card2=document.getElementById('card2')
    var card3=document.getElementById('card3')
    titulo.style.display='none'
    player.style.display='none'
    sobre.style.display='none'
    textoSobre.style.display='none'
    habilidades.style.display='flex'
    hab1.style.display='flex'
    hab2.style.display='flex'
    hab3.style.display='flex'
    portfolio.style.display='none'
    port1.style.display='none'
    port2.style.display='none'
    radios.style.display='flex'
    voltar.style.display='block'
    card1.checked=false
    card2.checked=true
    card3.checked=false
}
function portfolio(){
    var titulo=document.getElementById('titulo')
    var player=document.getElementById('estilo-player')
    var sobre=document.getElementById('estilo-sobre')
    var textoSobre=document.getElementById('sobre')
    var habilidades=document.getElementById('estilo-hab')
    var hab1=document.getElementById('hab1')
    var hab2=document.getElementById('hab2')
    var hab3=document.getElementById('hab3')
    var portfolio=document.getElementById('estilo-port')
    var port1=document.getElementById('port1')
    var port2=document.getElementById('port2')
    var radios=document.getElementById('radios')
    var voltar=document.getElementById('voltar')
    var card1=document.getElementById('card1')
    var card2=document.getElementById('card2')
    var card3=document.getElementById('card3')
    titulo.style.display='none'
    player.style.display='none'
    sobre.style.display='none'
    textoSobre.style.display='none'
    habilidades.style.display='none'
    hab1.style.display='none'
    hab2.style.display='none'
    hab3.style.display='none'
    portfolio.style.display='flex'
    port1.style.display='flex'
    port2.style.display='flex'
    radios.style.display='flex'
    voltar.style.display='block'
    card1.checked=false
    card2.checked=false
    card3.checked=true
}
function clone(){
    var msg1=document.getElementById('mensagem1')
    msg1.style.display='block'
}