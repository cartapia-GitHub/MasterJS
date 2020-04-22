'use strict'

/*
Tabla de multiplicar de un numero introducido en pantalla
*/
do{
	var numero = parseInt(prompt("¿De que numero quieres la tabla ?",0));
}while(isNaN(numero));
var result = "Tabla de "+numero+" : \n";
document.write("<h1>Tabla del "+numero+"</h1>");
for(var i=1; i<=10; i++){
	document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
 result = result+ numero+" * "+i+" : "+numero*i+"\n";
}

alert(result);
console.log(result);

//todas las tablas de multiplicar
result = "Todas las Tablas: \n";
document.write("<h1>Todas las Tablas : </h1><br/>");
for(var c=1; c<=10; c++){
		document.write("<h3>Tabla del "+c+": </h3><br/>");
		result = result+"Tabla del "+c+": \n";
	for(var i=1; i<=10; i++){
		document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    	result = result+ c+" * "+i+" : "+c*i+"\n";
	}

}
console.log(result);