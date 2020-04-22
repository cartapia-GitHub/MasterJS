'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros 
introducidos por el usuario
*/
/*var numero1;
var numero2;

do{
	numero1 =parseInt(prompt('Introduce el primer numero : ',0));
}while(isNaN(numero1));

do{
	numero2 =parseInt(prompt('Introduce el segundo numero : ',0));

}
while(isNaN(numero2));

var tam;
var result="";
var incr;
if(numero1 > numero2){
	tam = numero1 - numero2;
	incr=numero2;
	result=numero2;
	for(var i=0; i<tam;i++){
		incr++;
		result = result+" , "+(incr);
	}

}else if(numero1 < numero2){
	tam=numero2-numero1;
	incr=numero1;
	result=numero1;
	for(var j=0; j<tam;j++){
		incr++;
		result = result+" , "+(incr);
	}
}else {
	tam= 0;
	result = result+"0";
}

console.log(result);
alert("El resultado entre "+numero1+" y "+numero2+" es : "+result);*/

var numero1= parseInt(prompt("Introduce el primer numero", 0));
var numero2= parseInt(prompt("Introduce el segundo numero", 0));
document.write("<h1>De"+numero1+" a "+numero2+" están estos numeros:</h1>");
for(var i=numero1; i<=numero2; i++){
	document.write(i+"<br/>");
}