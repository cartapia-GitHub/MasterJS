'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo García", "José Martin",52, true];
			
var lenguajes =  new Array("PHP", "JS", "Go", "Java", "C", "Pascal","Phyton");

//console.log(nombres[5]);
//console.log(lenguajes);
//console.log(nombres.length);
/*var elemento = parseInt(prompt("Que elemento del array quieres??",0));

if(elemento >= nombres.length){
	alert("Introduce un numero menor que "+nombres.length);
}
else{
	alert("El usuario seleccionado es : "+ nombres[elemento]);
}*/

document.write("<h1>Lenguajes de Programación del 2020</h1>");
document.write("<ul>");
/*for(var i=0;i<lenguajes.length;i++){
	document.write("<li>"+lenguajes[i]+"</li>");

}*/

/*lenguajes.forEach((elemento, index, data)=>{
	document.write("<li>"+elemento+"</li>");
});*/

/*lenguajes.forEach((elemento)=>{
	document.write("<li>"+elemento+"</li>");
});

lenguajes.forEach((elemento, index, data)=>{
	document.write("<li>"+index+" "+elemento+"</li>");
});*/

for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");

}

document.write("</ul>");

//Busquedas
/*var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});*/

/*var busqueda = lenguajes.find(lenguaje =>
	lenguaje == "PHP");*/
var precios = [10, 20, 50, 80, 12];
//var busqueda = lenguajes.findIndex(lenguaje =>
//	lenguaje == "JS");
//some entrega true or false dependiendo de la condicion
var busqueda = precios.some(precio => 
	precio <10);
console.log(busqueda);