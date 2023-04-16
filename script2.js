var area = document.getElementById('img')
area.addEventListener('click' , clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', volta)
function clicar() {
    var msg = document.getElementById('mensagem')
    msg.innerHTML = 'Calabresa  &rarr;  Massa crocante, molho de tomate, queijo catupiry e linguiça calabresa picante'

}

function entrar() {

    area.style.transform = 'scale(1.4,1.4)'
    area.style.transition = 'all 1s'
}

function volta() {
    area.style.transform = 'scale(1,1)'
    area.style.transition = 'all 1s'
    var msg = document.getElementById('mensagem')
    msg.innerHTML = null
    msg.style.transition = 'all 1s'

}




var area_frango = document.getElementById('img_frango')
area_frango.addEventListener('click' , clicar_frango)
area_frango.addEventListener('mouseenter' , entrar_frango)
area_frango.addEventListener('mouseout', volta_frango)

function clicar_frango(){
    var msg = document.getElementById('mensagem_frango')
    msg.innerHTML = ' Frango com Catupiry &rarr; Uma combinação de molho de tomate, queijo e suculentos pedaços de frango desfiado, com cremoso catupiry.'
}

function entrar_frango() {

    area_frango.style.transform = 'scale(1.4,1.4)'
    area_frango.style.transition = 'all 1s'
}

function volta_frango() {
    area_frango.style.transform = 'scale(1,1)'
    area_frango.style.transition = 'all 1s'
    var msg = document.getElementById('mensagem_frango')
    msg.innerHTML = null
    msg.style.transition = 'all 1s'

}





var area_portuguesa = document.getElementById('img_portuguesa')
area_portuguesa.addEventListener('click' , clicar_portuguesa)
area_portuguesa.addEventListener('mouseenter' , entrar_portuguesa)
area_portuguesa.addEventListener('mouseout', volta_portuguesa)

function clicar_portuguesa(){
    var msg = document.getElementById('mensagem_portuguesa')
    msg.innerHTML = 'Portuguesa &rarr; Uma pizza com presunto, cebola, ovos, e calabresa defumada, perfeita para quem busca um sabor intenso e único.'
}

function entrar_portuguesa() {

    area_portuguesa.style.transform = 'scale(1.4,1.4)'
    area_portuguesa.style.transition = 'all 1s'
}

function volta_portuguesa() {
    area_portuguesa.style.transform = 'scale(1,1)'
    area_portuguesa.style.transition = 'all 1s'
    var msg = document.getElementById('mensagem_portuguesa')
    msg.innerHTML = null
    msg.style.transition = 'all 1s'

}

var area_tropicana = document.getElementById('img_tropicana')
area_tropicana.addEventListener('click' , clicar_tropicana)
area_tropicana.addEventListener('mouseenter' , entrar_tropicana)
area_tropicana.addEventListener('mouseout', volta_tropicana)

function clicar_tropicana(){
    var msg = document.getElementById('mensagem_tropicana')
    msg.innerHTML = 'Pizza Tropicana &rarr; A identidade da casa com queijo derretido, legumes quentes e abacaxi, trazendo um sabor agridoce irresistível.'
}

function entrar_tropicana() {

    area_tropicana.style.transform = 'scale(1.4,1.4)'
    area_tropicana.style.transition = 'all 1s'
}

function volta_tropicana() {
    area_tropicana.style.transform = 'scale(1,1)'
    area_tropicana.style.transition = 'all 1s'
    var msg = document.getElementById('mensagem_tropicana')
    msg.innerHTML = null
    msg.style.transition = 'all 1s'

}


var area_doce = document.getElementById('img_doce')
area_doce.addEventListener('click' , clicar_doce)
area_doce.addEventListener('mouseenter' , entrar_doce)
area_doce.addEventListener('mouseout', volta_doce)

function clicar_doce(){
    var msg = document.getElementById('mensagem_doce')
    msg.innerHTML = 'Pizza de Nutella &rarr; Uma pizza deliciosa, com massa crocante e cobertura de Nutella, perfeita para uma sobremesa ou uma fuga da dieta'
}

function entrar_doce() {

    area_doce.style.transform = 'scale(1.4,1.4)'
    area_doce.style.transition = 'all 1s'
}

function volta_doce() {
    area_doce.style.transform = 'scale(1,1)'
    area_doce.style.transition = 'all 1s'
    var msg = document.getElementById('mensagem_doce')
    msg.innerHTML = null
    msg.style.transition = 'all 1s'

}





