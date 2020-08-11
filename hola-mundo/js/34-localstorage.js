'use strict'
//Localstorage
//usa memoria de navegador para guardar datos en forma persistete durante la navegacion
//Comprobar la disponibilidad del localstorage

if(typeof(Storage) !== 'undefined'){
	console.log("Localstorage disponible");
}
else{
	console.log("Incompatible con Localstorage");
}

//Guardar datos
localStorage.setItem("titulo","Curso de Symfony");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar Objetos
var usuario={
	nombre: "Victor Robles",
	email: "victor@victor.com",
	web: "victorroblesweb.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);
//localStorage.removeItem("usuario");
localStorage.clear();