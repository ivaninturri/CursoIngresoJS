function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	
	switch (mesDelAño) 
	{
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Enero":
			alert("ya pasanos el frio, ahora calor!!!!");
			break;
		case "Abril":
			alert("Falta para el invierno");
			break;
		default:
			alert("Ya paso el invierno");
			break;
	}




}//FIN DE LA FUNCIÓN