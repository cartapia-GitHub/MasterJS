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
});*/

lenguajes.forEach((elemento, index, data)=>{
	document.write("<li>"+index+" "+elemento+"</li>");
});

document.write("</ul>");