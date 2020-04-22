'use strict'

/*utilizando un bucle mostrar la media y la suma de los 
resultados introducidos por un usuario, hasta que ingrese 
un numero negativo*/

/*var numero1 = parseInt(prompt('Ingresa un numero', 0));
var cont=1;
var suma= numero1;
var media =0;

while(numero1 != NaN || numero1 <= 0){

   console.log(numero1);
   numero1 = parseInt(prompt('Ingresa un numero', 0));
   if(numero1 ==NaN ||numero1 <0){
   	break;
   }
   cont++;
   suma=suma+numero1;
   media =suma/cont;
   console.log("media "+media+" , suma : "+suma);

}
*/

var suma=0;
var contador=0;

do{
	var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo',0));
	if(isNaN(numero)){
		numero =0;
	}else if(numero >=0){
		//suma = suma + numero;
		suma+=numero;
		contador ++;

	}
	console.log(suma);
	console.log(contador);
}while(numero >=0);

alert("la suma de todos los numeros es :"+suma);
alert("la media de todos los numeros es :"+(suma/contador));
