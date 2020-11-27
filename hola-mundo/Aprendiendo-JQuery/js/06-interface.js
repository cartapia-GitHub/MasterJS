$(document).ready(function(){
	// Mover el elemento por la pagina
	$('.elemento').draggable();

	//Redimensionar
	$(".elemento").resizable();

	//Seleccionar elementos
	//$(".lista-seleccionable").selectable();
	$(".lista-seleccionable").sortable({
		update:function(event,ui){
			console.log("Ha cambiado la lista")
		}
	});

	//Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop:function(){
			console.log("Has soltado algo dentro del área");
		}
	});

	//Efectos
	$("#mostrar").click(function(){
		//$(".caja-efectos").fadeToggle();
		//$(".caja-efectos").effect("explode");
		//$(".caja-efectos").toggle("explode");
		//$(".caja-efectos").toggle("blind");
		//$(".caja-efectos").toggle("slide");
		//$(".caja-efectos").toggle("drop");
		//$(".caja-efectos").toggle("fold");
		//$(".caja-efectos").toggle("puff");
		//$(".caja-efectos").toggle("scale");
		//$(".caja-efectos").toggle("shake");
		//$(".caja-efectos").toggle("shake", "slow");
		$(".caja-efectos").toggle("shake", 4000);
	}); 

	//Tooltip
	$(document).tooltip();

	//Dialog
	$("#lanzar-popup").click(function(){

		$("#popup").dialog();
	});

	//Datepicker
	$("#calendario").datepicker();

	//Tabs
	$("#pestanas").tabs();
});