function mostrar()
{
	//tomo la hora
	let horaDelDia
    let mensaje

	mensaje = "Es de mañana";
	horaDelDia = document.getElementById("txtIdHora").value;
    horaDelDia = parseInt(horaDelDia);

	
	switch (horaDelDia) 
	{
		case 7:
			alert(mensaje);
			break;
		case 8:
			alert(mensaje);
			break;
		case 9:
			alert(mensaje);
			break;
		case 10:
		    alert(mensaje);
			break;
		case 11:
			alert(mensaje);
			break;
	
		default:
			break;
	}



}//FIN DE LA FUNCIÓN