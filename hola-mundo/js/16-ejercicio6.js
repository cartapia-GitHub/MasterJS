'use strict'

/*
Que nos diga si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

do{
var number = parseInt(prompt("Ingrese un numero ",0));
}while(isNaN(number));

if(number%2==0){
   alert("El numero "+number+" es par");
}
else{
	alert("El numero "+ number+ " es impar");
}