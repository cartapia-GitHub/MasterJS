'use strict'

//Transformaciones de textos

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript curso de Victor Robles";
var texto2 = "es muy buen curso";

//de numero a string
/*var dato = numero.toString();
var    dato1 = texto1.toLowerCase();
var    dato2 = texto2.toUpperCase();*/
//console.log(dato);
//console.log(dato1);
//console.log(dato2);

//calcular longitud de texto
var nombre = "Victor Robles";
//console.log(nombre.length);

//Concatenar

var textoTotal = texto1.concat(" "+texto2);
//console.log(textoTotal);

//Buscar palabra dentro de un string

var busqueda = texto1.lastIndexOf("curso");
var busqueda2 = texto1.search("curso");
var busqueda3 = texto1.match("curso");

var busqueda4 = texto1.match(/curso/gi);
var busqueda5 = texto1.match(/curso/g);
var busqueda6 = texto1.substr(14,5);
var busqueda7 = texto1.charAt(44);
var busqueda8 = texto1.startsWith("Bi");
var busqueda9 = texto1.endsWith("Victor Robles");
var busqueda9 = texto1.includes("Javascript");
var busqueda10 = texto1.replace("Javascript","Symphony");
var busqueda11 = texto1.slice(14);
var busqueda12 = texto1.slice(14,22);
var busqueda13 = texto1.split(" ");
var busqueda14 = texto1.trim();
//console.log(busqueda);
//console.log(busqueda2);
console.log(busqueda14 //saca los espacios al principio y al final de un string
