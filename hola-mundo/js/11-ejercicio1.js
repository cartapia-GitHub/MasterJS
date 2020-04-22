'use strict'

//Ejercicio 1
/*
Programa que pida dos numeros y que nos diga cual es 
el mayor, el menor y si son iguales
plus: Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir
*/
/*var numero1 = prompt("Ingresa un numero", 0);
var numero2 = prompt("Ingresa segundo numero", 0);
if(Number(numero1)==Number(numero2)){
	alert(numero1 +" es igual a "+ numero2);
}
else if(Number(numero1)>Number(numero2)){
	alert(numero1+" es mayor que "+numero2);
}
else{
 alert(numero2+" es mayor que "+numero1);
}*/

var numero1= parseInt(prompt('Introduce el primer numero',0));

while( numero1<=0 ||  isNaN(numero1) ){
		numero1= parseInt(prompt('Introduce el primer numero, debe ser un valor positivo distinto de cero',0));
}
var numero2= parseInt(prompt('Introduce el segundo numero',0));

while(numero2<=0 || isNaN(numero2)){
		numero2= parseInt(prompt('Introduce el segundo numero, debe ser un valor positivo distinto de cero',0));
}

console.log(numero1,numero2);

if(numero1==numero2){
	alert("LOS NUMEROS SON IGUALES");
}
else if(numero1>numero2){
	alert("EL NUMERO MAYOR ES : "+numero1);
	alert("EL NUMERO MENOR ES: "+numero2);
}
 else if(numero1<numero2){
	alert("EL NUMERO MENOR ES : "+numero1);
	alert("EL NUMERO MAYOR ES: "+numero2);
}
else{
	alert("INTRODUCE NUMEROS CORRECTOS");
}