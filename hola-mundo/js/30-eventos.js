'use strict'

//Eventos del raton

var boton = document.querySelector("#boton");
window.addEventListener('load', ()=>{
	function cambiarColor(){
		console.log("Me has dado click");
		var bg = boton.style.background;
		if(bg =="green"){
			boton.style.background="red";
			boton.style.padding = "10px";
		}else{
			boton.style.background="green";

		}
		boton.style.border = "1px solid #ccc";
	
		return true;
	}

	var boton = document.querySelector("#boton");
	//click
	boton.addEventListener('click', function(){
		cambiarColor();
		console.log(this);
		//boton.style.border = "10px solid black";
		this.style.border = "10px solid black";
	});
	//Mouse over
	boton.addEventListener('mouseover', function(){
		boton.style.background="yellow";
	});

	//Mouseout
	boton.addEventListener('mouseout', function(){
		boton.style.background="#ccc";
	});

	//EVENTOS TECLADO
	//Focus
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', function(){
		console.log("[focus] Estas dentro del input");
	});
	//Blur
	input.addEventListener('blur', function(){
		console.log("[blur] Estas fuera del input");
	});

	//Keydown
	input.addEventListener('keydown', function(){
		console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
	});

	//Keypress
	input.addEventListener('keypress', function(){
		console.log("[keypress] Tecla Presionada ", String.fromCharCode(event.keyCode));
	});

	//Keyup
	input.addEventListener('keyup', function(){
		console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
	});
} ); //el final del Load

