'use strict'

//condicional if
var edad= 74;
var nombre = 'David Suarez';

/* 
//Operadores relacionales
Mayor: >
Menor: <
Mayor o Igual: >=
Menor o Igual: <=
Igual: ==
Distinto: !=
*/

if(edad>=18){
   console.log(nombre+" tiene "+edad+" años, es mayor de edad " );
   if(edad<=33){
   		console.log("Todavía eres Millenial");
   }
   else if(edad >=70){
   		console.log("Eres Anciano");
   }
   else{
   		console.log("Ya no eres Millenial");
   }
}
else{
	console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

/*
//Operadores Lógicos
AND(Y): &&
OR(O): ||
Negación: !
*/

//Negación
var year = 2028;
if(year!=2016){
	console.log("El año no es 2016, realmente es: "+year);
}
//AND
if(year >= 2000 && year<=2020 && year!=2018){
	console.log("Estamos en la era actual");
}
else{
	console.log("Estamos en la era post moderna");
}
//OR
if(year == 2008 || (year >= 2018 && year==2028)){
	console.log("El año acaba en 8");
}
else{
	console.log("AÑO NO REGISTRADO");
}