'use strict'
//JSON : JAVASCRIPT OBJECT NOTATION

var pelicula = {
	titulo: 'Batman vs Superman',
	year:2017,
	pais:'Estados Unidos'
};

var peliculas = [
	{titulo:"La verdad duele", year:2016, pais:"Francia"},
	 pelicula
	];
var caja_peliculas=document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo +" - "+peliculas[index].year+" - "+peliculas[index].pais);
	caja_peliculas.append(p);
}

console.log(peliculas);
