'use strict'
window.addEventListener('load',function(){
	//Timers
	//setInterval --> se ejecuta cada cierto  tiempo en bucle
	//setTimeout --> se ejecuta sólo una vez en el intervalo de tiempo
	
	function intervalo(){
		var tiempo = setInterval(function(){
			console.log("Set interval ejecutado");
			var encabezado = document.querySelector("h1");
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "30px";
			}
			else{
				encabezado.style.fontSize = "50px";
			}
		
		}, 1000);
		return tiempo;
	}
	
	var tiempo = intervalo();
	var stop = document.querySelector("#stop");
	stop.addEventListener("click", function(){
		alert("Has parado el intervalo en bucle");
		clearInterval(tiempo);
	});
	var start = document.querySelector("#start");
	start.addEventListener("click", function(){
		alert("Has iniciado nuevamente el bucle");
		tiempo = intervalo();
	});
});