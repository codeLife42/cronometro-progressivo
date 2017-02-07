//Variaveis
var displayMinutos = document.querySelector("#displayMinutos");
var displaySegundos = document.querySelector("#displaySegundos");
var btnIniciar = document.querySelector("#btnIniciar");
var btnParar = document.querySelector("#btnParar");
var minutos = Number(displayMinutos.textContent);
var segundos = Number(displaySegundos.textContent);
var idSetInterval;
var ativo = false;
//Eventos
btnIniciar.addEventListener('click',iniciar);
btnParar.addEventListener('click',parar);
btnZerar.addEventListener('click',zerar);
//Evento para receber keypress
window.addEventListener("keypress",function(e){
	if(e.keyCode === 32 && !ativo){
		iniciar();
	}else if(e.keyCode === 32 && ativo){
		parar();
	}else if(e.keyCode === 13){
		zerar();
	}
});
//Funcoes
//Inicia cronometro
function iniciar(){
	idSetInterval = setInterval(contaTempo,1000);
   	btnIniciar.setAttribute("disabled","true");
   	ativo = true;
}
//Para cronometro
function parar(){
	clearInterval(idSetInterval);
	btnIniciar.removeAttribute("disabled");
	ativo = false;
}
//Zera cronometro
function zerar(){
	btnIniciar.removeAttribute("disabled");
	clearInterval(idSetInterval);
	segundos = 0;
	minutos = 0;
	displaySegundos.textContent = "00";
	displayMinutos.textContent = "00";
	ativo = false;
}
//Passa o tempo, se chegar a 60 transfere 1 para a variavel minutos
function contaTempo(){
	if(segundos < 60){
		segundos++;
		//Gambiarra mode on, para manter o estilo de dois numeros 00, 01, etc..
		if(segundos < 10){
			displaySegundos.textContent = "0" + segundos;
		}else{
			displaySegundos.textContent = segundos;
		}
	}else{
		minutos++;
		//Gambiarra mode off, para manter o estilo de dois numeros 00, 01, etc..
		if(minutos < 10){
			displayMinutos.textContent = "0" + minutos;
		}else{
			displayMinutos.textContent = minutos;
		}
		segundos = 0;
		displaySegundos.textContent = 0;
	}
}