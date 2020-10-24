$(document).ready(function(){
	var caja = $("#caja");
	$("#mostrar").hide();
	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.slideDown('slow');
	});
	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		caja.slideUp('slow', function(){
			console.log("Cartel Ocultado");
		});
		//.show(), .show('slow'),.show('normal'),.show('fast')
		//.fadeIn(),.fadeOut(), .fadeTo('slow',0.8), .fadeTo('slow',0.2)
		// .fadeTo('slow',1), .fadeTo('slow',0)
	});
	$("#todoenuno").click(function(){
		caja.slideToggle('fast');
		//toggle,fadeToggle,slideToggle
	});
	$("#animar").click(function(){
		caja.animate({
			marginLeft: '500px',
			fontSize:'40px',
			height:'110px'
		}, 'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '80px'
		},'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		},'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		},'slow')
		.animate({
			marginLeft: '500px',
			fontSize:'40px',
			height:'110px'
		}, 'slow')
		;
	});
});