'use strict'

//pruebas con let y var
//prueba con var
alert("Hola");
var numero = 40;
console.log(numero); //valor 40
if(true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

//prueba con let
let number = 40;
console.log(number); //valor 40
if(true){
	let number = 50;
	console.log(number); //valor 50
}

console.log(number); //valor 40

//prueba coon let texto
var texto = "Curso JS Victor Robles WEB";
console.log(texto);
if(true){
	let texto = "Curso Larabel Victor Robles WEB";
	console.log(texto);
}
console.log(texto);