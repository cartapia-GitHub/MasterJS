'use strict'

//Arrays multidimensionales

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];
//peliculas.sort(); //por default ordena por orden alfabetico
peliculas.reverse(); //orden inverso del array

console.log(peliculas);
var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*var elemento = "";

do{

	elemento= prompt("Introduce tu película :");
	
	if(elemento!="ACABAR"){
		peliculas.push(elemento);
	}

}while(elemento != "ACABAR");
*/
//SACA EL ULTIMO ELEMENTO
//peliculas.pop();

var indice = peliculas.indexOf('Gran Torino');
if(indice > -1){
	peliculas.splice(indice,1); //splice borra desde indice hasta numero que indiquemos
}

var peliculas_string = peliculas.join(); //las deja en un string separadas por coma
var cadena ="texto1, texto2, texto3";
var cadena_array = cadena.split(",");//separa la cadena y la mete a un arreglo, cada elemento es separado por la coma 

console.log(cadena_array);