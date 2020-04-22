'use strict'

/*
Muestre todos los numeros divisores de un 
numero introducido en un prompt
*/

var number = parseInt(prompt("Introduce un numero"));
var result = "";
for(var i=1; i<=number; i++){
	if(number%i == 0){
		result= result+i+";";
	}

}
alert("Los divisores de "+number+" son: "+result);
