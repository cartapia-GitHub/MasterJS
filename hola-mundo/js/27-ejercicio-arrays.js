'use strict'

/* ejercicio arrays: hacer un programa que:
1.Pida 6 números por pantalla y los meta en un array
2.Mostrar el array entero(todos sus elementos) en el cuerpo 
de la pagina y en la consola
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Búsqueda de un valor introducido por el usuario, que nos 
diga si lo encuentra y su indice. (se valorará el uso de
funciones)

*/
var miArray =[];
do{
var strArray = prompt("Ingresa por favor, 6 numeros separados por , :", 0);
miArray= strArray.split(",");
}while(strArray.length <11 || !strArray.includes(",") || miArray.length<6);

//meterlo en un array

var miArrayNumber =[];
miArray.forEach((elemento)=>{
	var num=parseInt(elemento);
	miArrayNumber.push(num);
});

function mostrar(myArray, textoCustom = ""){
	//mostrar array por pagina y por consola
	document.write("<ul>");
	document.write("<h3>Los Números del Array "+textoCustom+" son: </h3>");
	myArray.forEach((element)=>{
	document.write("<li>"+element+"</li>");
});
document.write("</ul>");
}

mostrar(miArrayNumber, "");

console.log("El array es : ");
console.log(miArrayNumber);

var orderedArray = miArrayNumber.sort(function(a,b){return a-b});
mostrar(orderedArray, " Ordenado ");

console.log("El array ordenado es : ");
console.log(orderedArray);
var arrayOrdered = orderedArray;

var invertedArray = orderedArray.reverse();
//var invertedArray = miArrayNumber.sort(function(a,b){return b-a});

mostrar(invertedArray, " Invertido ");

console.log("El array en orden inverso es:");
console.log(invertedArray);

document.write("El arreglo tiene : "+orderedArray.length+" elementos");

var busqueda = parseInt(prompt("ingresa un valor a buscar :",0));
	var posicion = arrayOrdered.findIndex(valorB =>
	valorB == busqueda);
	
	if(posicion || posicion!=(-1)){
		document.write("<hr/><h3>ENCONTRADO "+busqueda+"</h3>");
		document.write("<h3>Posición de la búsqueda: "+posicion+"</h3><hr/>");
	}
	else{
		document.write("<hr/><h3>NO ENCONTRADO "+busqueda+"</h3><hr/>");
	}





console.log("El array tiene : "+orderedArray.length+" elementos");
if(busqueda && busqueda!=-1){
	console.log("ENCONTRADO "+busqueda+" en la posicion : "+posicion);
}
else{
	console.log("NO ENCONTRADO "+busqueda);
}



/*function mostrarArray(elementos, textoCustom = ""){
	document.write("<h1>Contenido del Array"+textoCustom+"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, index)=>{
    	document.write("<li>"+elemento+" </li>");
	});
	document.write("</ul>");
}

//Pedir 6 números
var numeros = [];
for(var i=0; i<6;i++){
	numeros.push(parseInt(prompt("Introduce un número",0)));
}

//Mostrar en el cuerpo de la página


// Mostrar array en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, 'Ordenado');

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'Revertido');

//Contar elementos

document.write("<h1> El array tiene "+numeros.length+" elementos </h1>");

//Busqueda
var busqueda = parseInt(prompt("Introduce número a buscar ",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion!=-1){
	document.write("<hr/><h1>ENCONTRADO</h1>");
	document.write("<h1>Posición de la búsqueda: "+posicion+"</h1><hr/>");
}
else{
	document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}*/
