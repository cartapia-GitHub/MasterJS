'use strict'

//DOM - Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}

//var caja = document.getElementById("micaja");
// Aca se usa sin nada para la etiqueta, con # para el elemento
// que se llame asitiene un id, con . para los archivos con cierta extension
var caja = document.querySelector("#micaja");
caja.innerHTML="¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola 2";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

//todosLosDivs.forEach((valor,indice) => {  //no se puede ocupar foreach porque
	//el document.getElementsByTagName('div') nos trae un html collection
	//mas recomendable utilizar un for in
	var seccion = document.querySelector("#miseccion");

	var hr = document.createElement("hr");


	var valor;
	for(valor in todosLosDivs){

		if(typeof todosLosDivs[valor].textContent == 'string'){
			var parrafo = document.createElement("p");
			var texto = document.createTextNode(todosLosDivs[valor].textContent);
			//appendChild y prepend funcionan igual
			parrafo.append(texto);
			seccion.append(parrafo);
		}
		
	}	
	seccion.append(hr);
//});

/*var textCont = todosLosDivs[2].textContent; 
var textCont2 = todosLosDivs[2].innerHTML;
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "green";*/
//var color = prompt("Ingresa un color de caja ","red");
//cambiaColor(color);
//console.log(caja);
//console.log(todosLosDivs);
//console.log(contenidoEnTexto);

// Conseguir elementos que su clase css

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
//console.log(divsAmarillos);
divsAmarillos[0].style.background = "yellow";
var div;
for(div in divsRojos){
	if(divsRojos[div].className == "rojo"){
		divsRojos[div].style.background="red";
	}
	
}
//console.log(divsRojos);

//Query Selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);