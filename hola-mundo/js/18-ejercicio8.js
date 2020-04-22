'use strict'

/*
Calculadora:
- pida dos numeros por pantalla
-si metemos uno mal que nos vuelva a pedir
-en el cuerpo de la pagina, en una alerta y por la consola
el resultado de sumar, restar, multiplicar y dividir estas
dos cifras
*/

do{
	var numero1 = parseInt(prompt("Ingresa el primer numero", 0));
}while(isNaN(numero1));
do{
	var numero2 = parseInt(prompt("Ingresa el segundo numero", 0));
}while(isNaN(numero2));

var result = "Calculadora: \n";
document.write("<h1> Calculadora </h1> <br/>");
document.write(numero1+"+"+numero2+" = "+(numero1+numero2)+"<br/>");
result = result+numero1+"+"+numero2+" = "+(numero1+numero2)+"\n";
document.write(numero1+"-"+numero2+" = "+(numero1-numero2)+"<br/>");
result = result+numero1+"-"+numero2+" = "+(numero1-numero2)+"\n";
document.write(numero1+"*"+numero2+" = "+(numero1*numero2)+"<br/>");
result = result+numero1+"*"+numero2+" = "+(numero1*numero2)+"\n";
if(numero2==0){
document.write(numero1+"/"+numero2+" = infinito<br/>");
result = result+numero1+"/"+numero2+" = infinito\n";
}
else{
document.write(numero1+"/"+numero2+" = "+(numero1/numero2)+"<br/>");
result = result+numero1+"/"+numero2+" = "+(numero1/numero2)+"\n";	
}


alert(result);
console.log(result);
