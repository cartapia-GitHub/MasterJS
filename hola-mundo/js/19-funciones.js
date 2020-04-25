'use strict'

//Funciones
//Una función es una agrupacion reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2){
	console.log("Suma: "+(numero1+numero2)) ;
	console.log("Resta: "+(numero1-numero2));
	console.log("Multiplicación: "+(numero1*numero2));
	console.log("División: "+(numero1/numero2));
	console.log("*********************************");
}

function porPantalla(numero1, numero2){
	document.write("Suma: "+(numero1+numero2)+"<br/>") ;
	document.write("Resta: "+(numero1-numero2)+"<br/>");
	document.write("Multiplicación: "+(numero1*numero2)+"<br/>");
	document.write("División: "+(numero1/numero2)+"<br/>");
	document.write("*********************************<br/>");
}


function calculadora(numero1, numero2, mostrar = false){
	//conjunto de instrucciones a ejecutar
	if(mostrar == false){
		porConsola(numero1, numero2);
	}
	else{
		porPantalla(numero1, numero2);
	}
	
	return true;
	//return "Hola soy la calculadora!!";
}

//Invocar a la funcion
calculadora(1,4);
calculadora(2,5,true);
calculadora(4,5,true);
calculadora(10,8);
/*
for(var i=1; i<=10; i++){
	console.log("iteración "+i);
	calculadora(i,8);
}*/