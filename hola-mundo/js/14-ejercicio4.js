'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros 
introducidos por el usuario

*/
/*do{
var numero1 = parseInt(prompt("Introduzca el primer numero", 0));
}while(isNaN(numero1));


do{
var numero2 = parseInt(prompt("Introduzca el segundo numero", 0));
}while(isNaN(numero2));

console.log(numero1, numero2);
var num = 0;
var result="";
var enc = "";

if(numero1>numero2){
	enc="Entre "+numero2+" y "+numero1+" los impares son";
	for(var i=numero2; i<=numero1;i++){
		num = i;
		
        if(num%2 != 0){ //es impar
        	
        	result = result+" ; "+num;
        }

	}
}	
else if(numero2> numero1){
	enc="Entre "+numero1+" y "+numero2+" los impares son";
    for(var j= numero1; j<=numero2;j++){
    	num =j;
    	
    	if(num%2 != 0){ //es impar
    		
        	result = result+" ; "+num;
        }
    }
}
else{//son iguales
	result = "Son iguales no hay impares entre ellos";
}

alert(enc+" : "+result);*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while(numero1<numero2){
	numero1++;
	if(numero1%2 != 0){
		console.log("El "+numero1+" es impar");
	}
}