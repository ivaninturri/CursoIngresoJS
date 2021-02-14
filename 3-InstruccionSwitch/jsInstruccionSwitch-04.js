function mostrar()
{
	//tomo el mes
	let mesDelAño
	let mensaje
	
	mesDelAño = document.getElementById("txtIdMes").value;
	mensaje = "Este mes tiene"

	switch (mesDelAño)
	{
		case "Enero":
			alert(mensaje +" 31 dias");
			break;
		case "Febrero":
			alert(mensaje + " 28 dias");
			break;
		case "Marzo":
			alert(mensaje + " 31 dias");
			break;
		case "Abril":
			alert(mensaje + " 30 dias");
			break;
		case "Mayo":
			alert(mensaje + " 31 dias");
			break;
		case "Junio":
			alert(mensaje + " 30 dias");
			break;
		case "Julio":
			alert(mensaje + " 31 dias");
			break;
		case "Agosto":
			alert(mensaje + " 31 dias");
			break;
		case "Septiembre":
			alert(mensaje + " 30 dias");
			break;
		case "Octubre":
			alert(mensaje + " 31 dias");
			break;
		case "Noviembre":
			alert(mensaje + " 30 dias")
			break;
		case "Diciembre":
			alert(mensaje + " 31 dias");
			default:
			break;
	}
	
	



}//FIN DE LA FUNCIÓN