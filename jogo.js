var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var matou = 0


	var matou_over = window.location.search
	matou_over=matou_over.replace('?','')


var criaMosquitoTempo =1500

var nivel = window.location.search
nivel=nivel.replace('?','')

if(nivel ==='normal'){
	//1500

var criaMosquitoTempo =1500

}else if(nivel ==='dificil'){
	//1000

var criaMosquitoTempo =1000

}else if(nivel==='profissional'){
	//750

var criaMosquitoTempo =750

}

function ajustaTamanhoPalcoJogo(){
altura = window.innerHeight
largura = window.innerWidth


 console.log(altura,largura)
}

function matou_over(){
	document.getElementById('matou_over').innerHTML = matou_over
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -=1

	if(tempo<0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href='vitoria.html?'+matou
	}else{

	document.getElementById('cronometro').innerHTML = tempo
	document.getElementById('matou').innerHTML = matou

	}
},1000)

function posicaoRandomica(){


//remover mosquito anterior caso exista
if(document.getElementById('mosquito')){
	document.getElementById('mosquito').remove()
if(vidas>3){
	//game over
	window.location.href = 'game_over.html?'+matou
}else{
	console.log('v'+vidas)
	document.getElementById('v'+vidas).src="imagens/coracao_vazio.png"
	vidas++
	}
}


var posicaoX= Math.floor(Math.random() * largura) -90
var posicaoY = Math.floor(Math.random() * altura) -90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)



//criar elemento html

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX +'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
	matou++
}

document.body.appendChild(mosquito)

	console.log(mosquito.className)

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3)
	
	switch(classe){
	case 0:
		return 'mosquito1'
	case 1:
		return 'mosquito2'
	case 2:
		return 'mosquito3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2)

	switch(classe){
	case 0:
		return 'ladoA'
	case 1:
		return 'ladoB'
	}
}